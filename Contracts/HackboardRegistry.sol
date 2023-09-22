pragma solidity 0.8.19;

contract HackBoardRegistry{
    address public HackBoardAdmin;
    uint256[] public AllTeams;
    address[] public AllUsers;
    uint256 public TeamIncrement;

    constructor(){
        HackBoardAdmin = msg.sender;
    }

    mapping(address => uint256) public Users;
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
        address[] TeamMembers;
        bool InterestedInPredictionMarket;
    }

    function OnboardNewTeam(string memory TeamName, string memory ShortDescription, string memory Discord, address[] memory CurrentMembers, bool InterestedInPredictionMarket) public returns(string memory TeamCode) {
        require(Users[msg.sender].HasTeam == false);
        uint256 TeamID = TeamIncrement;
        TeamIncrement++;

        Users[msg.sender].HasTeam = true;
        Users[msg.sender].TeamID = TeamID;

        Teams[TeamID] = HackBoardTeam(msg.sender, TeamName, ShortDescription, CurrentMembers, InterestedInPredictionMarket);

        for(uint256 i = 0; i < CurrentMembers.length; i++){
            User[CurrentMembers[i]].HasTeam = true;
            User[CurrentMembers[i]].TeamID = TeamID;
        }
        
        AllUsers.push(msg.sender);
        AllTeams.push(TeamID);
        return TeamID;
    }

   

    function GetTeamInfo(uint256 TeamID) public returns(HackBoardTeam memory){
        return Teams[TeamID];
    }

    function GetUserInfo(address _User) public returns(User memory){
        return(Users[User]);
    }

    function GetAllTeams() public returns(uint256[] memory){
        return AllTeams;
    }

}
