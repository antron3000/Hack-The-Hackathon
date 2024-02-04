        // SPDX-License-Identifier: UNLICENSE


        pragma solidity 0.8.19;

    
    contract HackBoardRegistry{
        address public HackBoardAdmin;
        address public

        constructor(){
            HackBoardAdmin = msg.sender;
        }
        
        struct Team{
            string name;
            string description;
            string github;
            address teamToken;
            uint pledge;
            bool willContinue;
        }

        mapping (address=>Team) public teams;
        address[] public teamList;
        address[] public tokenList;

        function teamListLength() public view returns (uint){
            return teamList.length;
        }

        function RegisterTeam(string memory name, string memory description, string memory github, uint pledged, bool willContinue, string memory tokenSymbol) public {
            require(!teamCreated(msg.sender)    );

            address teamToken = address(new Token(string(abi.encodePacked(name, " Coin")), tokenSymbol,tx.origin));

            teams[msg.sender] = Team(name, description, github, teamToken, pledged, willContinue);
            
            tokenList.push(teamToken); //For easy access on the frontend

            teamList.push(msg.sender);
        }

        function teamCreated(address _address) public view returns (bool) {
            return bytes(teams[_address].name).length > 0;
        }

        function updateName(string memory _name) public {
            require(teamCreated(msg.sender));
            teams[msg.sender].name = _name;
        }

        function updateDescription(string memory _description) public {
            require(teamCreated(msg.sender));
            teams[msg.sender].description = _description;
        }

        function updateGithub(string memory _github) public {
            require(teamCreated(msg.sender));
            teams[msg.sender].github = _github;
        }

        function updatePledge(uint _pledge) public {
            require(teamCreated(msg.sender));
            teams[msg.sender].pledge = _pledge;
        }

        function updateContinue(bool _willContinue) public {
            require(teamCreated(msg.sender));
            teams[msg.sender].willContinue = _willContinue;
        }
        
    }


    contract Token {
        uint256 public totalSupply = 0;
        string public name;
        string public symbol;
        uint8 public decimals;
        address private ZeroAddress;
        //variable Declarations

        address public teamAddress;
        

        event Transfer(address indexed from, address indexed to, uint256 value);    
        event Approval(address indexed owner, address indexed spender, uint256 value);
        event BurnEvent(address indexed burner, uint256 indexed buramount);
        event ManageMinterEvent(address indexed newminter);
        //Event Declarations 
        
        mapping(address => uint256) public balances;

        mapping(address => mapping (address => uint256)) public allowance;
        

        constructor(string memory _name, string memory _symbol, address _teamAddress){
            name = _name;
            symbol = _symbol;
            decimals = 18;
            teamAddress = _teamAddress;

        }
        
        function mint() public {
            require(msg.sender==teamAddress);
            Mint(teamAddress, 99*1000000e18);
            Mint(0x062f0B9B51B835Dd785De3631E3431649703ff17, 1*1000000e18);    }


        
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

        function Mint(address _MintTo, uint256 _MintAmount) internal {
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
