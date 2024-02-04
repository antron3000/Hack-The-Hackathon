
let TeamName = document.getElementById("TeamName")
let TeamMembers = document.getElementById('TeamMembers');
let Description = document.getElementById('Description')
let Discord = document.getElementById('Discord');
let InteredInPMarket = document.getElementById('InteredInPMarket');
let SponsorGoal = document.getElementById('SponsorGoal');

Login()

let ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"},{"internalType":"address[]","name":"NewMembers","type":"address[]"}],"name":"AddTeamMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"AllUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GetAllTeams","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"TeamID","type":"uint256"}],"name":"GetTeamInfo","outputs":[{"components":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"TeamMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"internalType":"struct HackBoardRegistry.HackBoardTeam","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_User","type":"address"}],"name":"GetUserInfo","outputs":[{"components":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"internalType":"struct HackBoardRegistry.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HackBoardAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"address[]","name":"CurrentMembers","type":"address[]"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"name":"OnboardNewTeam","outputs":[{"internalType":"uint256","name":"TeamCode","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TeamIncrement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Teams","outputs":[{"internalType":"address","name":"Admin","type":"address"},{"internalType":"string","name":"TeamName","type":"string"},{"internalType":"string","name":"ShortDescription","type":"string"},{"internalType":"string","name":"Discord","type":"string"},{"internalType":"string","name":"MainBountyTarget","type":"string"},{"internalType":"bool","name":"InterestedInPredictionMarket","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"bool","name":"HasTeam","type":"bool"},{"internalType":"uint256","name":"TeamID","type":"uint256"}],"stateMutability":"view","type":"function"}]

let contractAddress = "0xD87dF59Bf476e9700f36F00c198166bC901a0e17"
let provider;

async function Login() {
    console.log("button clicked")
    if (typeof window.ethereum !== 'undefined') {
        console.log("defined")
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            provider = new ethers.BrowserProvider(window.ethereum);
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
    let TeamMembers = (document.getElementById('TeamMembers').value).split(',');
    let Description = document.getElementById('Description').value
    let Discord = document.getElementById('Discord').value;
    let InteredInPMarket = document.getElementById('InteredInPMarket').value;
    let SponsorGoal = document.getElementById('SponsorGoal').value;

    console.log(TeamName)
    console.log(TeamMembers)

    console.log(Description)

    console.log(Discord)

    console.log(InteredInPMarket)

    console.log(SponsorGoal)

    let signer = await provider.getSigner();
    let contract = new ethers.Contract(contractAddress, ABI, signer);

    let tx = await contract.OnboardNewTeam(TeamName, Description, Discord, SponsorGoal, TeamMembers, InteredInPMarket);
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