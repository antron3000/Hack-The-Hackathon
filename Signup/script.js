let TeamMemberArray = [];

let TeamMembers = document.getElementById('TeamMembers');


document.getElementById('metamaskButton').addEventListener('click', async () => {
    console.log("button clicked")
    if (typeof window.ethereum !== 'undefined') {
        console.log("defined")
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const provider = new ethers.BrowserProvider(window.ethereum);
            console.log("a")
            const signer = await provider.getSigner();
            console.log("a")

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
});

