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
Login();
let contract;


let contractAddress = "0x7cfffb3afa95a0F09E92c850B9bE1a7D6698A800"
let provider;
let signer;

async function Login() {
    console.log("button clicked");
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask is installed");
        try {
            // Get the network ID
            const networkId = await window.ethereum.request({ method: 'net_version' });

            if (networkId === '1') {
                provider = new ethers.BrowserProvider(window.ethereum);
                console.log("Connected to Ethereum Classic Chain");
                signer = await provider.getSigner();
                contract = new ethers.Contract(contractAddress, ABI, signer);

                document.getElementById('metamaskButton').innerText = "Connected";
                document.getElementById('metamaskButton').disabled = true;
                document.getElementById('temprow').style.display = "none";

                //SetUserTeamName();

                populateTableWithTeamInfo();
            } else {
                alert("Please switch to Ethereum Classic (Network ID 61) in MetaMask.");
            }
        } catch (error) {
            console.error("User denied account access or an error occurred.");
        }
    } else {
        alert("MetaMask is not installed");
    }
}

//Create a function that calls the contract and gets the list of all team ids
async function GetAllTeams() {
    let teamIDs = await contract.GetAllTeams();
    return teamIDs
}

//Create a function that calls the contract and gets the team info for each team then displays it in the "Table" element as a tbody row
async function GetTeamInfo(teamID) {

    let teamInfo = await contract.GetTeamInfo(teamID);

    return JSON.parse(JSON.stringify(teamInfo))
}

async function GetUserInfo(){
    let User = await contract.GetUserInfo(await signer.getAddress());
    let Output = [User[0], JSON.parse((User[1]).toString())]
    return Output;
}

async function SetUserTeamName(){
    let UserInfo = await GetUserInfo();
    if (UserInfo[0]){
        TeamInfo = await GetTeamInfo(UserInfo[1]);
        document.getElementById("UserTeamName").innerText = ' ' + TeamInfo[1] + ' Team';
    }
    else{
        return
    }
}

async function GetAllTeamInfoToConsole(){
    let TeamInfos = [];
    let numTeams = await contract.teamListLength();
    for (let i = 0; i < numTeams; i++) {
        let teamAddress = await contract.teamList(i)
        let teamInfo = await contract.teams(teamAddress)
        console.log(teamInfo)
        TeamInfos.push(teamInfo);
    }
    console.log(TeamInfos)
    return(TeamInfos)
}

async function insertDataIntoTable(data) {
    // Add console logs to debug the data

    const name = data[0];
    const description = data[1];
    const github = data[2];
    const teamAddress = data[3];
    let pledged = data[4]
    const willContinue = data[5] ? "Yes" : "No";
    //const tokenSymbol = data[6];

    pledged = await ethers.formatUnits(pledged,0) + "%"

    console.log(name, description, github, pledged, willContinue);

    const tbody = document.getElementById('Registry');

    const tr = document.createElement('tbody');
    tr.innerHTML = `<tr>
        <td>${name}</td>
        <td>${description}</td>
        <td>${github}</a></td>
        <td>${teamAddress}</a></td>
        <td>${pledged}</a></td>
        <td>${willContinue}</td>
        </tr>
    `;

    tbody.appendChild(tr);
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
        console.log("populateTableWithTeamInfo")
        const teamData = await GetAllTeamInfoToConsole();
        console.log(teamData);
        for (let i = 0; i < teamData.length; i++){
            if(i != 9 && i != 26 && i != 31 && i != 35){
            insertDataIntoTable(teamData[i]);
        }
        }
        
    
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
