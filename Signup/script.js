
let TeamName = document.getElementById("TeamName")
let TeamMembers = document.getElementById('TeamMembers');
let Description = document.getElementById('Description')
let Discord = document.getElementById('Discord');
let InteredInPMarket = document.getElementById('InteredInPMarket');
let SponsorGoal = document.getElementById('SponsorGoal');


let ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "HackBoardAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "github",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "pledged",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "willContinue",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "tokenSymbol",
				"type": "string"
			}
		],
		"name": "RegisterTeam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "teamCreated",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamListLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "teams",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "github",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "teamToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "pledge",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "willContinue",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_willContinue",
				"type": "bool"
			}
		],
		"name": "updateContinue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "updateDescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_github",
				"type": "string"
			}
		],
		"name": "updateGithub",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "updateName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pledge",
				"type": "uint256"
			}
		],
		"name": "updatePledge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
let contractAddress = "0x7cfffb3afa95a0F09E92c850B9bE1a7D6698A800"
let provider;

async function Login() {
    console.log("button clicked")
    if (typeof window.ethereum !== 'undefined') {
        console.log("defined")
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            provider = new ethers.BrowserProvider(window.ethereum);
            //provider2 = new ethers.JsonRPCProvider("https://geth-at.etc-network.info")
            console.log("a")
            const signer = await provider.getSigner();
            console.log("a")

            document.getElementById('metamaskButton').innerText = "Connected";
            document.getElementById('metamaskButton').disabled = true;

            const userAddress = await signer.getAddress();
            console.log("a")

            console.log(userAddress)
            document.getElementById('addressDisplay').innerText = `Address: ${userAddress}`;

            // Fetch balance
            console.log(userAddress)
            const balanceWei = await provider.getBalance(userAddress);
            console.log(balanceWei)
            const balanceEth = ethers.formatEther(balanceWei);
            console.log(balanceEth)
            document.getElementById('balanceDisplay').innerText = `Balance: ${balanceEth} ETH`;

        } catch (error) {
            console.error("User denied account access or an error occurred.");
        }
    } else {
        console.error("MetaMask is not installed");
    }
};


//Create a function that calls the contract and adds the team to the blockchain
async function OnBoard() {
    let TeamName = document.getElementById("TeamName").value
    
    let Description = document.getElementById('Description').value
    let Github = document.getElementById('Github').value;
    let TokenSymbol = document.getElementById('tokenSymbol').value;
    let Pledge = document.getElementById('Pledge').value;
    let WillContinue = document.getElementById('WillContinue').value === 'yes'; // Will be true if 'yes' is selected, false otherwise

    Pledge = await ethers.parseUnits(Pledge, 0)

     //let TeamMembers = (document.getElementById('TeamMembers').value).split(',');
         //let InteredInPMarket = document.getElementById('InteredInPMarket').value;


    console.log(TeamName)

    console.log(Description)

    console.log(TokenSymbol)
    console.log(Github)
    console.log(Pledge)
    console.log(WillContinue)



    let signer = await provider.getSigner();
    let contract = new ethers.Contract(contractAddress, ABI, signer);
    console.log(contract)

    let tx = await contract.RegisterTeam(TeamName, Description, Github, Pledge, false, TokenSymbol);
    let receipt = await tx.wait();
    console.log(receipt);
}

async function addETCToMetaMask() {
    const chainId = 61;
    const rpcUrl = 'https://geth-at.etc-network.info';
    const currencySymbol = 'ETC';
    const explorerUrl = 'https://etc.blockscout.com/';
  
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Ethereum Classic',
            nativeCurrency: {
              name: currencySymbol,
              symbol: currencySymbol,
              decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: [explorerUrl],
          },
        ],
      });
  
      console.log('Gnosis Chain added to MetaMask!');
    } catch (error) {
      console.error('Error adding Gnosis Chain to MetaMask:', error);
    }
  }