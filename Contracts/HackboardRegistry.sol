pragma solidity 0.8.19;

contract HackBoardRegistry{
    address HackBoardAdmin;
    string[] AllTeams;

    constructor(){
        HackBoardAdmin = msg.sender;
    }

    mapping(address => uint256) public UserTeamName;
    mapping(string => HackBoardTeam) public Teams;
    
    struct HackBoardTeam{
        address Admin;
        string TeamName;
        address[] TeamMembers;
        bool PredictionMarketEnabled;
    }

    function OnboardNewTeam(string TeamName, address[] CurrentMembers) public {

    }

    function handle(uint32 _origin, bytes32 _sender, bytes calldata _body) external {
        require(msg.sender == Handler);
        HackBoardTeam memory ArrivingInfo = abi.decode(_body, (HackBoardTeam));

    }
}
