let ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"},{"internalType":"address[]","name":"NewMembers","type":"address[]"}],"name":"AddTeamMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GetAllTeams","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"}],"name":"GetTeamInfo","outputs":[{"components":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"TeamMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"internalType":"struct HackBoardRegistry.HackBoardTeam","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_User","type":"address"}],"name":"GetUserInfo","outputs":[{"components":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"internalType":"struct HackBoardRegistry.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HackBoardAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"CurrentMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"name":"OnboardNewTeam","outputs":[{"internalType":"uint256","name":"TeamCode","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TeamIncrement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Teams","outputs":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"stateMutability":"view","type":"function"}]

Login();
let contract;


let contractAddress = "0xD87dF59Bf476e9700f36F00c198166bC901a0e17"
let provider;
let signer;

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
                signer = await provider.getSigner();
                contract = new ethers.Contract(contractAddress, ABI, signer);

                document.getElementById('metamaskButton').innerText = "Connected";
                document.getElementById('metamaskButton').disabled = true;
                document.getElementById('temprow').style.display = "none";

                SetUserTeamName();

                populateTableWithTeamInfo();
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
    let teamIDs = await GetAllTeams();
    for (let i = 0; i < teamIDs.length; i++) {
        TeamInfos.push(await GetTeamInfo(teamIDs[i]));
    }
    console.log(TeamInfos)
    return(TeamInfos)
}

function insertDataIntoTable(data) {
    // Add console logs to debug the data

    const teamName = data[1];
    const description = data[2];
    const contactLink = data[3];
    const interestInPredictionMarket = data[6] ? "Yes" : "No";
    const mainSponsorPrizeTarget = data[4];

    console.log(teamName, description, contactLink, interestInPredictionMarket, mainSponsorPrizeTarget);

    const tbody = document.getElementById('Registry');

    const tr = document.createElement('tbody');
    tr.innerHTML = `<tr>
        <td>${teamName}</td>
        <td>${description}</td>
        <td>${contactLink}</a></td>
        <td>${interestInPredictionMarket}</td>
        <td>${mainSponsorPrizeTarget}</td>
        </tr>
    `;

    tbody.appendChild(tr);
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
            if(i != 9 && i != 26 && i != 31){
            insertDataIntoTable(teamData[i]);
        }
        }
        
    
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
