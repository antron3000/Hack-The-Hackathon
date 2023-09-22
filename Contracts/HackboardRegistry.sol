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
    mapping(string => uint256) public JoinCodes;

    struct User{
        bool HasTeam;
        uint256 TeamID;
    }
    
    struct HackBoardTeam{
        address Admin;
        string TeamName;
        address[] TeamMembers;
        bool InterestedInPredictionMarket;
    }

    function OnboardNewTeam(string TeamName, address[] CurrentMembers, bool InterestedInPredictionMarket) public {
        require(User[msg.sender].HasTeam == false);

        uint256 TeamID = TeamIncrement;

    }

    function handle(uint32 _origin, bytes32 _sender, bytes calldata _body) external {
        require(msg.sender == Handler);
        HackBoardTeam memory ArrivingInfo = abi.decode(_body, (HackBoardTeam));

    }
}
