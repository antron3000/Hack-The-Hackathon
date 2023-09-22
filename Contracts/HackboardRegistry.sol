pragma solidity 0.8.19;

contract HackBoardRegistry{
    address HackBoardAdmin;
    address Handler;
    Hyperlane Mailbox = Hyperlane(0x35231d4c2D8B8ADcB5617A638A0c4548684c7C70);
    Hyperlane GasProcessorContract = Hyperlane(0x56f52c0A1ddcD557285f7CBc782D3d83096CE1Cc);
    uint256[] SupportedChains;
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

    function OnboardNewTeam(string TeamName, address[]) 

    function handle(uint32 _origin, bytes32 _sender, bytes calldata _body) external {
        require(msg.sender == Handler);
        HackBoardTeam memory ArrivingInfo = abi.decode(_body, (HackBoardTeam));

    }
}

interface Hyperlane {
    function dispatch(uint32 _destinationDomain, bytes32 _recipientAddress, bytes calldata _messageBody ) external returns (bytes32);
    function process(bytes calldata _metadata, bytes calldata _message) external;
    function payForGas(bytes32 _messageId, uint32 _destinationDomain, uint256 _gasAmount, address _refundAddress) external payable;
    function quoteGasPayment(uint32 _destinationDomain, uint256 _gasAmount) external view returns (uint256);
}