// SPDX-License-Identifier: UNLICENSE


pragma solidity 0.8.19;

contract HackBoardRegistry{
    address public HackBoardAdmin;
    HackBoardPredictionMarket public HackBoardPredictionMarketContract;
    uint256[] public AllTeams;
    address[] public AllUsers;
    uint256 public TeamIncrement;
    ERC20 public HackBoardToken = ERC20(0x5A1ab378E8b08Fc442bB44d64FaC56dB6f53fE54);

    constructor(){
        HackBoardAdmin = 0xc932b3a342658A2d3dF79E4661f29DfF6D7e93Ce;
        HackBoardPredictionMarketContract = new HackBoardPredictionMarket(HackBoardAdmin);
    }

    mapping(address => User) public Users;
    mapping(uint256 => HackBoardTeam) public Teams;

    struct User{
        bool HasTeam;
        uint256 TeamID;
    }
    
    struct HackBoardTeam{
        address Admin;
        string TeamName;
        string ShortDescription;
        address[] TeamMembers;
        address[] JoinRequests;
    }

    function OnboardNewTeam(string memory TeamName, string memory ShortDescription) public {
        require(Users[msg.sender].HasTeam == false);
        uint256 TeamID = TeamIncrement;
        TeamIncrement++;

        Users[msg.sender].HasTeam = true;
        Users[msg.sender].TeamID = TeamID;

        Teams[TeamID] = HackBoardTeam(msg.sender, TeamName, ShortDescription, new address[](0), new address[](0));
        HackBoardToken.transferFrom(HackBoardAdmin, msg.sender, 2500 ether);

        HackBoardPredictionMarketContract.AddTeam(TeamID);
        
        AllUsers.push(msg.sender);
        AllTeams.push(TeamID);
    }

    function JoinTeam(uint256 TeamID) public {
        require(Users[msg.sender].HasTeam == false);
        Teams[TeamID].JoinRequests.push(msg.sender);
    }

    function ApproveJoinRequest(address UserAddress, uint256 TeamID) public {
        require(Teams[TeamID].TeamMembers.length < 5);
        require(msg.sender == Teams[TeamID].Admin);
        require(Users[UserAddress].HasTeam == false);
        Users[UserAddress].HasTeam = true;
        Users[UserAddress].TeamID = TeamID;
        Teams[TeamID].TeamMembers.push(UserAddress);
        HackBoardToken.transferFrom(HackBoardAdmin, UserAddress, 2500 ether);
    }

    function GetTeamInfo(uint256 TeamID) public view returns(HackBoardTeam memory){
        return Teams[TeamID];
    }

    function GetUserInfo(address _User) public view returns(User memory){
        return(Users[_User]);
    }

    function GetAllTeams() public view returns(uint256[] memory){
        return AllTeams;
    }

    //display team join requests minus the ones that have been approved by looping through the team members and removing them from the join requests
    function GetTeamJoinRequests(uint256 TeamID) public view returns(address[] memory){
        address[] memory JoinRequests = Teams[TeamID].JoinRequests;
        address[] memory TeamMembers = Teams[TeamID].TeamMembers;
        address[] memory JoinRequestsMinusApproved = new address[](JoinRequests.length - TeamMembers.length);
        uint256 JoinRequestsMinusApprovedCount = 0;

        for(uint256 i = 0; i < JoinRequests.length; i++){
            bool IsApproved = false;
            for(uint256 j = 0; j < TeamMembers.length; j++){
                if(JoinRequests[i] == TeamMembers[j]){
                    IsApproved = true;
                }
            }
            if(!IsApproved){
                JoinRequestsMinusApproved[JoinRequestsMinusApprovedCount] = JoinRequests[i];
                JoinRequestsMinusApprovedCount++;
            }
        }

        return JoinRequestsMinusApproved;
    }

}



contract HackBoardPredictionMarket{
    address public HackBoardAdmin;
    HackBoardRegistry public HackBoardRegistryContract;
    uint256[] public ParticipatingTeams;
    uint256 public WinningSlots;
    uint256 public TotalForPrizePool;
    uint256 public TotalFadePrizePool;
    uint256 public ForPoolActiveMarkets;
    uint256 public FadePoolActiveMarkets;
    bool public MarketsOpen;
    bool public MarketsFinalized;

    ERC20 HackBoardToken = ERC20(0x5A1ab378E8b08Fc442bB44d64FaC56dB6f53fE54);

    mapping(uint256 => TeamStruct) public TeamPredictionsInfo;
    mapping(address => mapping(uint256 => uint256)) public UserForDeposits;
    mapping(address => mapping(uint256 => uint256)) public UserFadeDeposits;

    struct TeamStruct{
        uint256 TotalForPredictionsDeposits;
        uint256 TotalFadePredictionDeposits;
        uint256 WinnerPayoutRate;
        bool ForSuccess;
        bool AgainstSuccess;
    }

    constructor(address _HackBoardAdmin){
        HackBoardAdmin = _HackBoardAdmin;
        HackBoardRegistryContract = HackBoardRegistry(0xD87dF59Bf476e9700f36F00c198166bC901a0e17);
    }

    //Create a function that allows users to deposit ether to a specific team pool
    function DepositToTeam(uint256 TeamID, bool ForAgainst, uint256 Amount) public {
        require(MarketsOpen);
        require(HackBoardToken.allowance(msg.sender, address(this)) >= Amount, "Insufficient allowance");
        require(Amount > 1 ether, "Minimum token deposit is 1");

        if(ForAgainst){
            UserForDeposits[msg.sender][TeamID] += Amount;
            TeamPredictionsInfo[TeamID].TotalForPredictionsDeposits += Amount;
            TotalForPrizePool += Amount;
        }
        else{
            UserFadeDeposits[msg.sender][TeamID] += Amount;
            TeamPredictionsInfo[TeamID].TotalFadePredictionDeposits += Amount;
            TotalFadePrizePool += Amount;
        }
    }

    //Create a function that allows users to attempt to withdraw their winnings from a pool, but will fail if their bet was wrong
    function WithdrawFromTeam(uint256 TeamID) public {
        require(!MarketsOpen);
        require(MarketsFinalized);

        if(UserForDeposits[msg.sender][TeamID] > 0){
            if(TeamPredictionsInfo[TeamID].ForSuccess){
                HackBoardToken.transfer(msg.sender, (UserForDeposits[msg.sender][TeamID] * TeamPredictionsInfo[TeamID].WinnerPayoutRate) / 1000);
            }
        }
        else if(UserFadeDeposits[msg.sender][TeamID] > 0){
            if(TeamPredictionsInfo[TeamID].AgainstSuccess){
                HackBoardToken.transfer(msg.sender, (UserFadeDeposits[msg.sender][TeamID] * TeamPredictionsInfo[TeamID].WinnerPayoutRate) / 1000);
            }
        }
        else{
            revert('No winning bets on this team');
        }
    }

    //Admin functions

    function FinalizeMarkets(uint256[] memory SuccessfulTeams) public {
        require(msg.sender == HackBoardAdmin);
        require(SuccessfulTeams.length == WinningSlots);
        CloseMarkets();

        //check all successful teams if they have any deposits, if not, remove them from the total winning slots
        uint256[] memory SuccessfulTeamsWithDeposits;
        uint256 SuccessfulTeamsWithDepositsCount = 0;

        for(uint256 i = 0; i < SuccessfulTeams.length; i++){
            if(TeamPredictionsInfo[SuccessfulTeams[i]].TotalForPredictionsDeposits > 0){
                SuccessfulTeamsWithDeposits[SuccessfulTeamsWithDepositsCount] = SuccessfulTeams[i];
                SuccessfulTeamsWithDepositsCount++;
            }
        }

        uint256 TotalForAvailablePrizePool = TotalForPrizePool / SuccessfulTeamsWithDepositsCount;

        for(uint256 i = 0; i < SuccessfulTeamsWithDeposits.length; i++){
            TeamPredictionsInfo[SuccessfulTeams[i]].ForSuccess = true;
            TeamPredictionsInfo[SuccessfulTeams[i]].WinnerPayoutRate = (TotalForAvailablePrizePool * 1000) / TeamPredictionsInfo[SuccessfulTeams[i]].TotalForPredictionsDeposits;
        }

        //------------------------------------------------
        //FADE MARKET
        //------------------------------------------------

        uint256[] memory FadeTeamsWithDeposits;
        uint256 FadeTeamsWithDepositsCount = 0;

        for(uint256 i = 0; i < ParticipatingTeams.length; i++){
            if(!TeamPredictionsInfo[ParticipatingTeams[i]].ForSuccess && TeamPredictionsInfo[ParticipatingTeams[i]].TotalFadePredictionDeposits > 0){
                FadeTeamsWithDeposits[FadeTeamsWithDepositsCount] = ParticipatingTeams[i];
                FadeTeamsWithDepositsCount++;
            }
        }

        uint256 TotalFadeAvailablePrizePool = TotalFadePrizePool / (ParticipatingTeams.length - FadeTeamsWithDepositsCount);

        for(uint256 i = 0; i < FadeTeamsWithDeposits.length; i++){
            if(!TeamPredictionsInfo[ParticipatingTeams[i]].ForSuccess){
                TeamPredictionsInfo[ParticipatingTeams[i]].AgainstSuccess = true;
                TeamPredictionsInfo[ParticipatingTeams[i]].WinnerPayoutRate = (TotalFadeAvailablePrizePool * 1000) / TeamPredictionsInfo[ParticipatingTeams[i]].TotalFadePredictionDeposits;
            }
        }

        MarketsFinalized = true;
    }

    function OpenMarkets() public {
        require(msg.sender == HackBoardAdmin);
        require(!MarketsFinalized);        
        MarketsOpen = true;
    }

    function CloseMarkets() public {
        require(msg.sender == HackBoardAdmin);
        MarketsOpen = false;
    }
    
    //Only Registry Functions

    function AddTeam(uint256 TeamID) public {
        require(msg.sender == address(HackBoardRegistryContract));
        ParticipatingTeams.push(TeamID);
        TeamPredictionsInfo[TeamID] = TeamStruct(0, 0, 0, false, false);
    }

    //View Functions

    function GetAllTeams() public view returns(uint256[] memory){
        return ParticipatingTeams;
    }

    function GetTeamInfo(uint256 TeamID) public view returns(TeamStruct memory){
        return TeamPredictionsInfo[TeamID];
    }
}




contract ERC20 {
    uint256 public totalSupply;
    string public name;
    string public symbol;
    uint8 public decimals;
    address private ZeroAddress;
    address public Creator;
    //variable Declarations
    

    event Transfer(address indexed from, address indexed to, uint256 value);    
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event BurnEvent(address indexed burner, uint256 indexed buramount);
    event ManageMinterEvent(address indexed newminter);
    //Event Declarations 
    
    mapping(address => uint256) public balances;

    mapping(address => mapping (address => uint256)) public allowance;
    
    constructor(string memory _name, string memory _symbol){
        totalSupply = 0;
        name = _name;
        symbol = _symbol;
        decimals = 18;
        Creator = msg.sender;
    }
    
    function balanceOf(address Address) public view returns (uint256 balance){
        return balances[Address];
    }

    function approve(address delegate, uint _amount) public returns (bool) {
        allowance[msg.sender][delegate] = _amount;
        emit Approval(msg.sender, delegate, _amount);
        return true;
    }
    //Approves an address to spend your coins

    function transferFrom(address _from, address _to, uint256 _amount) public returns (bool) {
        require(_amount <= balances[_from]);    
        require(_amount <= allowance[_from][msg.sender]);
    
        balances[_from] = balances[_from]-(_amount);
        allowance[_from][msg.sender] = allowance[_from][msg.sender]-(_amount);
        balances[_to] = balances[_to]+(_amount);
        emit Transfer(_from, _to, _amount);
        return true;
    }
    //Transfer From an other address


    function transfer(address _to, uint256 _amount) public returns (bool) {
        require(_amount <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender]-(_amount);
        balances[_to] = balances[_to]+(_amount);
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }


    function Mint(address _MintTo, uint256 _MintAmount) public {
        require(msg.sender == Creator);
        balances[_MintTo] = balances[_MintTo]+(_MintAmount);
        totalSupply = totalSupply+(_MintAmount);
        ZeroAddress = 0x0000000000000000000000000000000000000000;
        emit Transfer(ZeroAddress ,_MintTo, _MintAmount);
    } //Can only be used on deploy, view Internal 


    function Burn(uint256 _BurnAmount) public {
        require (balances[msg.sender] >= _BurnAmount);
        balances[msg.sender] = balances[msg.sender]-(_BurnAmount);
        totalSupply = totalSupply-(_BurnAmount);
        ZeroAddress = 0x0000000000000000000000000000000000000000;
        emit Transfer(msg.sender, ZeroAddress, _BurnAmount);
        emit BurnEvent(msg.sender, _BurnAmount);
        
    }

}