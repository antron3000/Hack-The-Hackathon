pragma solidity 0.8.19;

contract HackBoardRegistry{
    address HackBoardAdmin;
    uint256[] AllTeams;
    uint256 TeamIncrement;

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

        return TeamID;
    }

    function OnboardUser(uint256 TeamID) public returns() {

    }

}
