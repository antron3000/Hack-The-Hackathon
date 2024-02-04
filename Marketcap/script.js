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
3
let erc20ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_teamAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "burner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "buramount",
				"type": "uint256"
			}
		],
		"name": "BurnEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newminter",
				"type": "address"
			}
		],
		"name": "ManageMinterEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_BurnAmount",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "delegate",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
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
		"name": "balances",
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
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teamAddress",
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
		"name": "totalSupply",
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
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const pairAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {
                "internalType": "uint112",
                "name": "_reserve0",
                "type": "uint112"
            },
            {
                "internalType": "uint112",
                "name": "_reserve1",
                "type": "uint112"
            },
            {
                "internalType": "uint32",
                "name": "_blockTimestampLast",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const routerAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "WETH",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const factoryAbi = [
    {
        "constant": true,
        "inputs": [
            {"name": "", "type": "address"},
            {"name": "", "type": "address"}
        ],
        "name": "getPair",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

Login();

let contractAddress = "0x7cfffb3afa95a0F09E92c850B9bE1a7D6698A800"
let provider;

let signer
let contract


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
            // document.getElementById('addressDisplay').innerText = `Address: ${userAddress}`;

            // // Fetch balance
            // console.log(userAddress)
            // const balanceWei = await provider.getBalance(userAddress);
            // console.log(balanceWei)
            // const balanceEth = ethers.formatEther(balanceWei);
            // console.log(balanceEth)
            // document.getElementById('balanceDisplay').innerText = `Balance: ${balanceEth} ETH`;

			console.log("Connected to Eth Classic Chain");

            
                //document.getElementById('temprow').style.display = "none";
				console.log("get Signer")
				console.log(signer)
                contract = new ethers.Contract(contractAddress, ABI, signer);
				console.log("populate	Table")
                await populateTableWithTeamInfo();

        } catch (error) {
            console.error("User denied account access or an error occurred.");
        }
    } else {
        console.error("MetaMask is not installed");
    }
};

async function serialize(teamInfo) {
	let serializableTemp1 = Object.fromEntries(
		Object.entries(temp1).map(([key, value]) => {
			if (typeof value === 'bigint') {
				return [key, value.toString()];
			}
			return [key, value];
		})
	);
}
 //Create a function that calls the contract and gets the team info for each team then displays it in the "Table" element as a tbody row
 async function GetTeamInfo(teamID) {
    let teamAddress = await contract.teamList(teamID);
    console.log(teamAddress);
    let teamInfo = await contract.teams(teamAddress);

    // Convert BigInt to String
    let teamInfoStr = JSON.parse(JSON.stringify(teamInfo, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));

    console.log(teamInfoStr);
    return teamInfoStr;
}


    async function GetAllTeamInfoToConsole(){
        let TeamInfos = [];
        let length = await contract.teamListLength()
		console.log(length)
        console.log("start")
        for (let i = 0; i < length; i++) {
            console.log(i)
            TeamInfos.push(await GetTeamInfo(i));
        }
        console.log(TeamInfos)
        return(TeamInfos)
    }

	let tableData = [];

	async function collectData(data) {
		const teamName = data[0];
		let tokenAddress = data[3];
		let token = new ethers.Contract(tokenAddress, erc20ABI, signer);
		console.log(token)
		let symbol = await token.symbol();
		//let pairToken = await getUniswapPairAddress(tokenAddress);
	
		let price;
		let marketcapValue;
		let marketcapDisplay;
		let circulatingSupply = await token.totalSupply();
		circulatingSupply = ethers.formatUnits(circulatingSupply, 18);
	
		// try {
		// 	price = await getTokenPrice(pairToken);
		// 	marketcapValue = price * 100000000;
		// 	marketcapDisplay = "$" + marketcapValue;
		// 	price = "$" + price;
		// } catch (error) {
		// 	price = "no liquidity";
		// 	marketcapValue = 0; // To enable sorting
		// 	marketcapDisplay = "N/A";
		// }
	
		tableData.push({
			teamName,
			symbol,
			//price,
			//marketcapValue,
			//marketcapDisplay,
			circulatingSupply,
			tokenAddress
		});
	}

	async function insertDataIntoTable(data) {
		// Collect Data
		await collectData(data);
	
		// Render Data (You can call this once after all data has been collected)
		renderTableData();
	}
	
	function renderTableData() {
		const tbody = document.getElementById('Registry');
		tbody.innerHTML = ''; // Clear existing rows
	
		tableData.sort((a, b) => b.marketcapValue - a.marketcapValue); // Sort by marketcap in descending order
	
		tableData.forEach((data, index) => {
			const tr = document.createElement('tr');
			tr.innerHTML = `<tr>
				<td>${index + 1}</td> <!-- This is the rank -->
				<td>${data.teamName}</td>
				<td>${data.symbol}</td>
				<td>${data.price}</td>
				<td>${data.marketcapDisplay}</td>
				<td>${data.circulatingSupply}</td>
				<td><button onclick="mintToken('${data.tokenAddress}')">Mint</button></td>
				<td><button onclick="addToken('${data.tokenAddress}')">Add</button></td>
				<td><button onclick="tradeToken('${data.tokenAddress}')">Trade</button></td>
			</tr>`;
	
			tbody.appendChild(tr);
		});
	}
	

    function tradeToken(tokenAddress) {
        const baseUrl = "https://honeyswap.1hive.eth.limo//#/swap?inputCurrency=ETH&outputCurrency=";
        const finalUrl = baseUrl + tokenAddress;
        window.open(finalUrl, '_blank'); // Open URL in a new tab
    }0x8b74FFB5bEd9fE8Ea952917F2097EB8Aa7700E36

    function addToken(tokenAddress) {
        const baseUrl = "https://honeyswap.1hive.eth.limo//#/add/XDAI/";
        const finalUrl = baseUrl + tokenAddress;
        window.open(finalUrl, '_blank'); // Open URL in a new tab
    }
	
	async function mintToken(tokenAddress){
        let token = new ethers.Contract(tokenAddress, erc20ABI, signer);
		await token.mint()
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

    async function populateTableWithTeamInfo() {
        
            const teamData = await GetAllTeamInfoToConsole();
            console.log(teamData);
            for (let i = 0; i < teamData.length; i++){
                console.log("populate " + i)
					console.log(teamData[i])
                    await insertDataIntoTable(teamData[i]);
                }
        
    
}

async function getTokenPrice(pairAddress) {
    const pairContract = new ethers.Contract(pairAddress, pairAbi, provider);
    console.log(pairContract)
    // Fetch reserves
    const [reserve0, reserve1] = await pairContract.getReserves();
    console.log(reserve0,reserve1)
    let x = reserve1*1000000000000000000n

    let y = x/reserve0

    let xdaiprice = ethers.formatEther(y)

    // Calculate the price (assuming token0 is ETH and token1 is the desired token)
    // Price = reserve0 (ETH) / reserve1 (TOKEN)
    return xdaiprice
}



async function getUniswapPairAddress(tokenAddress) {
    const provider = new ethers.JsonRpcProvider('https://rpc.gnosis.gateway.fm'); // Replace with your Infura endpoint or any Ethereum node endpoint

    // Addresses for Uniswap V2 on Mainnet
    const FACTORY_ADDRESS = '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7';
    const ROUTER_ADDRESS = '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77';

    const routerContract = new ethers.Contract(ROUTER_ADDRESS, routerAbi, provider);
    const factoryContract = new ethers.Contract(FACTORY_ADDRESS, factoryAbi, provider);

    const WETH = await routerContract.WETH();
    const pairAddress = await factoryContract.getPair(tokenAddress, WETH);

    return pairAddress;
}

document.addEventListener("DOMContentLoaded", function() {
    // Define the start time and duration (in this case, a 48-hour hackathon)
    const startTime = new Date('2024-02-04T09:00:00');  // Adjust the date and time as needed
    const durationInMilliseconds = 32400 * 100;
    const endTime = new Date(startTime.getTime() + durationInMilliseconds);

    function updateCountdown() {
        const now = new Date();
        let timeDifference = endTime - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        timeDifference -= hours * (1000 * 60 * 60);

        const mins = Math.floor(timeDifference / (1000 * 60));
        timeDifference -= mins * (1000 * 60);

        const secs = Math.floor(timeDifference / 1000);

        // Update the countdown timer display
        document.getElementById('timer').textContent = `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
});

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