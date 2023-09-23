// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.0;

contract HackBoardPredictionMarket{
    HackBoardRegistry public HackBoardRegistryContract;
    uint256[] public ParticipatingTeams;
    uint256 TotalHackathonPrizePool;

    mapping(uint256 => bool) public TeamParticipating;
    mapping(uint256 => TeamStruct) public TeamPredictionsInfo;
    mapping(address => mapping(uint256 => uint256)) public UserTeamPredictionsDeposits;

    struct TeamStruct{
        address ForToken;
        address FadeToken;
        uint256 TotalTeamPredictionsDeposits;
    }

    constructor(){
        HackBoardRegistryContract = HackBoardRegistry(0x5FbDB2315678afecb367f032d93F642f64180aa3);
        uint256[] memory AllTeams = HackBoardRegistryContract.GetAllTeams();
        for(uint256 i = 0; i < AllTeams.length; i++){
            HackBoardRegistry.HackBoardTeam memory Team = HackBoardRegistryContract.GetTeamInfo(AllTeams[i]);
            if(Team.InterestedInPredictionMarket){
                ParticipatingTeams.push(AllTeams[i]);
                TeamParticipating[AllTeams[i]] = true;
                //for each participating team, create two new erc20 tokens, one for the team, one for fading the team
                ERC20 ForToken = new ERC20(")

            }
        }
    }

    //Create a function that allows users to deposit ether to a specific team pool
    function DepositToTeam(uint256 TeamID, bool ForAgainst) public payable {
        require(msg.value > 0);
        require(TeamID >= 0);
        require(TeamID < ParticipatingTeams.length);
        TotalTeamPredictionsDeposits[TeamID].TotalTeamPredictionsDeposits += msg.value;
        UserTeamPredictionsDeposits[msg.sender][TeamID] += msg.value;

        TotalHackathonPrizePool += msg.value;
    }

    // function InitializePredictionMarket() public {
    //     
    // }
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
        require(msg.sender == );
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
