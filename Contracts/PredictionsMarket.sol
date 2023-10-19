// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.0;

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

    mapping(uint256 => bool) public TeamParticipating;
    mapping(uint256 => TeamStruct) public TeamPredictionsInfo;
    mapping(address => mapping(uint256 => uint256)) public UserForDeposits;
    mapping(address => mapping(uint256 => uint256)) public UserFadeDeposits;
    mapping(uint256 => bool) TeamAc

    struct TeamStruct{
        uint256 TotalForPredictionsDeposits;
        uint256 TotalFadePredictionDeposits;
        uint256 WinnerPayoutRate;
        bool ForSuccess;
        bool AgainstSuccess;
    }

    constructor(){
        HackBoardAdmin = msg.sender;
        HackBoardRegistryContract = HackBoardRegistry(0xD87dF59Bf476e9700f36F00c198166bC901a0e17);
        uint256[] memory AllTeams = HackBoardRegistryContract.GetAllTeams();
        for(uint256 i = 0; i < AllTeams.length; i++){
            HackBoardRegistry.HackBoardTeam memory Team = HackBoardRegistryContract.GetTeamInfo(AllTeams[i]);
            if(Team.InterestedInPredictionMarket){
                ParticipatingTeams.push(AllTeams[i]);
                TeamParticipating[AllTeams[i]] = true;
                TeamPredictionsInfo[AllTeams[i]] = TeamStruct(0, 0, 0, false, false);
            }
        }
    }

    //Create a function that allows users to deposit ether to a specific team pool
    function DepositToTeam(uint256 TeamID, bool ForAgainst) public payable {
        require(MarketsOpen);
        require(msg.value > 0);
        require(TeamParticipating[TeamID]);

        if(ForAgainst){
            if()
            UserForDeposits[msg.sender][TeamID] += msg.value;
            TeamPredictionsInfo[TeamID].TotalForPredictionsDeposits += msg.value;
            TotalForPrizePool += msg.value;
        }
        else{
            UserFadeDeposits[msg.sender][TeamID] += msg.value;
            TeamPredictionsInfo[TeamID].TotalFadePredictionDeposits += msg.value;
            TotalFadePrizePool += msg.value;
        }
    }

    //Create a function that allows users to attempt to withdraw their winnings from a pool, but will fail if their bet was wrong
    function WithdrawFromTeam(uint256 TeamID, bool ForAgainst) public {
        require(TeamParticipating[TeamID]);
        require(!MarketsOpen);

        if(ForAgainst){
            require(UserForDeposits[msg.sender][TeamID] > 0);
            require(TeamPredictionsInfo[TeamID].ForSuccess);
            payable(msg.sender).transfer((UserForDeposits[msg.sender][TeamID] * TeamPredictionsInfo[TeamID].WinnerPayoutRate) / 1000);
        }
        else{
            require(UserFadeDeposits[msg.sender][TeamID] > 0);
            require(TeamPredictionsInfo[TeamID].AgainstSuccess);
            payable(msg.sender).transfer((UserFadeDeposits[msg.sender][TeamID] * TeamPredictionsInfo[TeamID].WinnerPayoutRate) / 1000);
        }
    }

    //Admin functions

    function UpdateTeams() public{
        require(msg.sender == HackBoardAdmin);

        uint256[] memory AllTeams = HackBoardRegistryContract.GetAllTeams();
        for(uint256 i = 0; i < AllTeams.length; i++){
            HackBoardRegistry.HackBoardTeam memory Team = HackBoardRegistryContract.GetTeamInfo(AllTeams[i]);
            if(Team.InterestedInPredictionMarket && !TeamParticipating[i]){
                ParticipatingTeams.push(AllTeams[i]);
                TeamParticipating[AllTeams[i]] = true;
                TeamPredictionsInfo[AllTeams[i]] = TeamStruct(0, 0, 0, false, false);
            }
        }
    }

    function FinalizeMarkets(uint256[] memory SuccessfulTeams) public {
        require(msg.sender == HackBoardAdmin);
        require(SuccessfulTeams.length == 10);
        CloseMarkets();

        uint256 TotalForAvailablePrizePool = TotalForPrizePool / WinningSlots;

        uint256 TotalFadeAvailablePrizePool = TotalFadePrizePool / (ParticipatingTeams.length - WinningSlots);

        for(uint256 i = 0; i < SuccessfulTeams.length; i++){
            TeamPredictionsInfo[SuccessfulTeams[i]].ForSuccess = true;
            if(TeamPredictionsInfo[SuccessfulTeams[i]].TotalForPredictionsDeposits > 0){
                TeamPredictionsInfo[SuccessfulTeams[i]].WinnerPayoutRate = (TotalForAvailablePrizePool * 1000) / TeamPredictionsInfo[SuccessfulTeams[i]].TotalForPredictionsDeposits;
            }
            else{
                TeamPredictionsInfo[SuccessfulTeams[i]].WinnerPayoutRate = 0;
            }
        }

        for(uint256 i = 0; i < ParticipatingTeams.length; i++){
            if(!TeamPredictionsInfo[ParticipatingTeams[i]].ForSuccess){
                TeamPredictionsInfo[ParticipatingTeams[i]].AgainstSuccess = true;
                if(TeamPredictionsInfo[ParticipatingTeams[i]].TotalFadePredictionDeposits > 0){
                    TeamPredictionsInfo[ParticipatingTeams[i]].WinnerPayoutRate = (TotalFadeAvailablePrizePool * 1000) / TeamPredictionsInfo[ParticipatingTeams[i]].TotalFadePredictionDeposits;
                }
                else{
                    TeamPredictionsInfo[ParticipatingTeams[i]].WinnerPayoutRate = 0;
                }
            }
        }
    }

    function OpenMarkets() public {
        require(msg.sender == HackBoardAdmin);
        MarketsOpen = true;
    }

    function CloseMarkets() public {
        require(msg.sender == HackBoardAdmin);
        MarketsOpen = false;
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

contract HackBoardRegistry{
    address public HackBoardAdmin;
    uint256[] public AllTeams;
    address[] public AllUsers;
    uint256 public TeamIncrement;

    constructor(){
        HackBoardAdmin = msg.sender;
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
        string Discord;
        string MainBountyTarget;
        address[] TeamMembers;
        bool InterestedInPredictionMarket;
    }

    function OnboardNewTeam(string memory TeamName, string memory ShortDescription, string memory Discord, string memory MainBountyTarget, address[] memory CurrentMembers, bool InterestedInPredictionMarket) public returns(uint256 TeamCode) {
        uint256 TeamID = TeamIncrement;
        TeamIncrement++;

        Users[msg.sender].HasTeam = true;
        Users[msg.sender].TeamID = TeamID;

        Teams[TeamID] = HackBoardTeam(msg.sender, TeamName, ShortDescription, Discord, MainBountyTarget, CurrentMembers, InterestedInPredictionMarket);

        for(uint256 i = 0; i < CurrentMembers.length; i++){
            Users[CurrentMembers[i]].HasTeam = true;
            Users[CurrentMembers[i]].TeamID = TeamID;
        }
        
        AllUsers.push(msg.sender);
        AllTeams.push(TeamID);
        return TeamID;
    }

    function AddTeamMember(uint256 TeamID, address[] memory NewMembers) public {
        require(Teams[TeamID].Admin == msg.sender);

        for(uint256 i = 0; i < NewMembers.length; i++){
            Users[NewMembers[i]].HasTeam = true;
            Users[NewMembers[i]].TeamID = TeamID;
            Teams[TeamID].TeamMembers.push(NewMembers[i]);
        }
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

}
