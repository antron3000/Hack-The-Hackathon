pragma solidity 0.8.19;

contract HackBoardRegistry{
    address public HackBoardAdmin;
    uint256[] public AllTeams;
    address[] public AllUsers;
    uint256 public TeamIncrement;

    constructor(){
        HackBoardAdmin = msg.sender;
    }

    mapping(address => uint256) public User;
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
        bool InterestedInPredictionMarket;
        uint256 RegistrationTime;
    }

    function OnboardNewTeam(string TeamName, string ShortDescription, address[] CurrentMembers, bool InterestedInPredictionMarket) public returns(string TeamCode) {
        require(User[msg.sender].HasTeam == false);
        uint256 TeamID = TeamIncrement;
        TeamIncrement++;

        User[msg.sender].HasTeam = true;
        User[msg.sender].TeamID = TeamID;

        Teams[TeamID] = HackBoardTeam(msg.sender, TeamName, ShortDescription, CurrentMembers, InterestedInPredictionMarket);

        for(uint256 i = 0; i < CurrentMembers.length; i++){
            User[CurrentMembers[i]].HasTeam = true;
            User[CurrentMembers[i]].TeamID = TeamID;
        }
        
        AllUsers.push(msg.sender);
        AllTeams.push(TeamID);
        return TeamID;
    }

    function OnboardUser(uint256 TeamID) public returns() {
        require(User[msg.sender].HasTeam == false);

        User[msg.sender].HasTeam = true;
        User[msg.sender].TeamID = TeamID;

        Teams[TeamID].TeamMembers.push(msg.sender);

        AllUsers.push(msg.sender);
    }

    function GetTeamInfo(uint256 TeamID) public returns(HackBoardTeam){
        return Teams[TeamID];
    }

    function GetAllTeams() public returns(uint256[]){
        return AllTeams;
    }

}
