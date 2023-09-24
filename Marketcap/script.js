let ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AllTeams",
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
				"name": "discord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bountyTargets",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "interestedInPredictionMarket",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "pledgedToDistributePrize",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_willContinue",
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
				"name": "team",
				"type": "address"
			},
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
				"name": "discord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bountyTargets",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "interestedInPredictionMarket",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_willContinue",
				"type": "bool"
			}
		],
		"name": "importOldTeam",
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
				"name": "discord",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bountyTargets",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "teamToken",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "interest",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "pledge",
				"type": "bool"
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
				"name": "_discord",
				"type": "string"
			}
		],
		"name": "updateDiscord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_interest",
				"type": "bool"
			}
		],
		"name": "updateInterest",
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
		"name": "updateMainBountyTarget",
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
				"internalType": "bool",
				"name": "_pledge",
				"type": "bool"
			}
		],
		"name": "updatePledge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

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

let contractAddress = "0xC1FDf4678C684b2e8344057Eb9b37B7113b5d28b"
let provider;

let signer
let contract

async function Login() {
    console.log("button clicked");
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask is installed");
        try {
            // Get the network ID
            const networkId = await window.ethereum.request({ method: 'net_version' });

            if (networkId === '100') {
                provider = new ethers.BrowserProvider(window.ethereum);
                console.log("Connected to Gnosis Chain");

                document.getElementById('metamaskButton').innerText = "Connected";
                document.getElementById('metamaskButton').disabled = true;
                document.getElementById('temprow').style.display = "none";
                signer = await provider.getSigner();
                contract = new ethers.Contract(contractAddress, ABI, signer);

                await populateTableWithTeamInfo();
            } else {
                alert("Please switch to Gnosis Chain (Network ID 100) in MetaMask.");
            }
        } catch (error) {
            console.error("User denied account access or an error occurred.");
        }
    } else {
        alert("MetaMask is not installed");
    }
}

//Create a function that calls the contract and gets the team info for each team then displays it in the "Table" element as a tbody row
async function GetTeamInfo(teamID) {
    let teamAddress = await contract.teamList(teamID)
    let teamInfo = await contract.teams(teamAddress);

    return JSON.parse(JSON.stringify(teamInfo))
}

    async function GetAllTeamInfoToConsole(){
        let TeamInfos = [];
        let length = await contract.teamListLength()
        console.log("start")
        for (let i = 0; i < length; i++) {
            console.log(i)
            TeamInfos.push(await GetTeamInfo(i));
        }
        console.log(TeamInfos)
        return(TeamInfos)
    }

    async function insertDataIntoTable(data) {
        // Add console logs to debug the data

        const teamName = data[0];
        let tokenAddress = data[4]
        let token = new ethers.Contract(tokenAddress, erc20ABI, signer);
        console.log(tokenAddress)
        let symbol = await token.symbol()
        console.log("price")
        let pairToken = await getUniswapPairAddress(tokenAddress)
        console.log(pairToken)
		let price;
		let marketcap
		let circulatingSupply
		circulatingSupply = await token.totalSupply()
		console.log(circulatingSupply)
		circulatingSupply = ethers.formatUnits(circulatingSupply,18)
		console.log(circulatingSupply)


		try {
			price = await getTokenPrice(pairToken);
			marketcap = price*10000000
			price = "$" + price
			marketcap = "$" + marketcap
		
		} 

		catch (error) {
			price = "no liquidity";
			marketcap = "N/A";
		}
		
        console.log("price done")
        console.log(data)
        const description = data[2];
        const contactLink = data[3];
        const interestInPredictionMarket = data[6] ? "Yes" : "No";
        const mainSponsorPrizeTarget = data[4];

        console.log(teamName, description, contactLink, interestInPredictionMarket, mainSponsorPrizeTarget);

        const tbody = document.getElementById('Registry');

        const tr = document.createElement('tbody');
        tr.innerHTML = `<tr>
            <td></td>
            <td>${teamName}</td>
            <td>${symbol}</td>
            <td>${price}</td>
            <td>${marketcap}</td>
			<td>${circulatingSupply}</td>
			<td><button onclick="mintToken('${tokenAddress}')">Mint</button></td> <!-- Button 1 with onclick event -->
			<td><button onclick="addToken('${tokenAddress}')">Add</button></td> <!-- Button 1 with onclick event -->
			<td>   <button onclick="tradeToken('${tokenAddress}')">Trade</button> <!-- Button 1 with onclick event -->

			</tr>
        `;

        tbody.appendChild(tr);
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

    async function addGnosisChainToMetaMask() {
        const chainId = 100;
        const rpcUrl = 'https://rpc.ankr.com/gnosis';
        const currencySymbol = 'XDAI';
        const explorerUrl = 'https://gnosisscan.io/';
    
        try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
            {
                chainId: `0x${chainId.toString(16)}`,
                chainName: 'Gnosis Chain',
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
    const startTime = new Date('2023-09-22T21:00:00');  // Adjust the date and time as needed
    const durationInMilliseconds = 36 * 60 * 60 * 1000;
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
