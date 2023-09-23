// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.0;

contract HackBoardPredictionMarket{
    HackBoardRegistry public HackBoardRegistryContract;
    uint256[] public ParticipatingTeams;
    uint256 TotalHackathonPrizePool;

    mapping(uint256 => uint256) public TotalTeamPredictionsDeposits;
    mapping(address => mapping(uint256 => uint256)) public UserTeamPredictionsDeposits;

    constructor(){
        //check hackboardregistry for all teams and loop through them, if they are interested in prediction market, add them to participating teams
        HackBoardRegistryContract = HackBoardRegistry(0x5FbDB2315678afecb367f032d93F642f64180aa3);
        uint256[] memory AllTeams = HackBoardRegistryContract.GetAllTeams();
        for(uint256 i = 0; i < AllTeams.length; i++){
            HackBoardRegistry.HackBoardTeam memory Team = HackBoardRegistryContract.GetTeamInfo(AllTeams[i]);
            if(Team.InterestedInPredictionMarket){
                ParticipatingTeams.push(AllTeams[i]);
            }
        }
    }

    //Create a function that allows users to deposit ether to a specific team pool
    function DepositToTeam(uint256 TeamID) public payable {
        require(msg.value > 0);
        require(TeamID > 0);
        require(TeamID < ParticipatingTeams.length);
        TotalTeamPredictionsDeposits[TeamID] += msg.value;
        UserTeamPredictionsDeposits[msg.sender][TeamID] += msg.value;

        TotalHackathonPrizePool += msg.value;
    }

    // function InitializePredictionMarket() public {
    //     
    // }
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
