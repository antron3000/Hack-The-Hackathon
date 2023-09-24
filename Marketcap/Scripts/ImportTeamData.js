const { ethers } = require('ethers');

// Connect to the Ethereum network (this example uses Ethereum's mainnet)
const provider = new ethers.JsonRpcProvider('https://rpc.gnosis.gateway.fm'); // Replace with your RPC URL e.g. Infura, Alchemy, etc.

// Your Ethereum private key to sign transactions
const privateKey = '';
const wallet = new ethers.Wallet(privateKey, provider);

// Contract ABI and address
const hackBoardRegistryABI = [
    [
        "0xc932b3a342658A2d3dF79E4661f29DfF6D7e93Ce",
        "HackBoard",
        "We're HackBoard, an EthGlobalNYC hackathon team trying to augment the inter-team dynamic at the hackathon, for better collaboration, brainstorming and social connection. As you can see, we currently have a basic site set up allowing teams to sign up and express interest in a potential predictions market. Learn more about the diverse teams here in New York to spark your own ideas. Best of luck to everyone!",
        "https://discord.gg/PRHxT96u",
        "Unsure",
        [
            "0xc932b3a342658A2d3dF79E4661f29DfF6D7e93Ce",
            "0x92a0925C3c08C12e6e2185595FF94a49c1dfB5fB"
        ],
        true
    ],
    [
        "0xBbbEc054d75b9f75a96AeD0BB3bfFA310777ac95",
        "Rizz",
        "Decentralized event service with nfts",
        "no discord link",
        "All of them.",
        [
            "0xBbbEc054d75b9f75a96AeD0BB3bfFA310777ac95"
        ],
        true
    ],
    [
        "0x0ef7819DcD6d13950c774D9B3d2a293f637b8f50",
        "Whatlet",
        "The WhatsApp dApp",
        "D9J9V",
        "Biconomy",
        [
            "0x0ef7819DcD6d13950c774D9B3d2a293f637b8f50"
        ],
        true
    ],
    [
        "0x228568EA92aC5Bc281c1E30b1893735c60a139F1",
        "Gremlins",
        "High-level language and compiler for querying blockchain.",
        "ricmoo",
        "Main",
        [
            "0x228568EA92aC5Bc281c1E30b1893735c60a139F1"
        ],
        true
    ],
    [
        "0xeC55Ef79e97a74239100f8DC804D0626EE6bDD7c",
        "StableHR",
        "We r not sure yet!",
        "",
        "anything with 20k",
        [
            "0xeC55Ef79e97a74239100f8DC804D0626EE6bDD7c"
        ],
        true
    ],
    [
        "0x0070cda707CB93870E4F51ce7ACacac58Adb8CB7",
        "GovernUs",
        "A Governance platform to allow web2 communities to self-govern more efficiently by leveraging web3 tools.",
        "marmaj819",
        "Near, polygon",
        [
            "0x0070cda707CB93870E4F51ce7ACacac58Adb8CB7"
        ],
        true
    ],
    [
        "0xF08a80E57E3E86434c6d47Ba133E0a08D0266f6c",
        "Topological Control ",
        "We are building a control module to track the topology of the Ethereum network",
        "eyal_42",
        "Main Prize",
        [
            "0xF08a80E57E3E86434c6d47Ba133E0a08D0266f6c"
        ],
        true
    ],
    [
        "0xBD4604F66C74d16BC74A20013071fAD49359C338",
        "Wisdom",
        "You'll see (or will you ?)",
        "",
        "Not sure",
        [
            "0xBD4604F66C74d16BC74A20013071fAD49359C338"
        ],
        true
    ],
    [
        "0xAA289325d1afc4AA040281b10dD9f10A8560D296",
        "SYLee",
        "We are making awesome DeFi Platform🔥",
        "dann0614",
        "Biconomy",
        [
            "0xAA289325d1afc4AA040281b10dD9f10A8560D296"
        ],
        true
    ],
    [
        "0x118EDd03335D07B498A511213cDb9FDfB448EcA3",
        "Split ",
        "Splitwise clone",
        "niftybruh",
        "Hyperlane Interopability ",
        [
            "0x118EDd03335D07B498A511213cDb9FDfB448EcA3"
        ],
        true
    ],
    [
        "0x118EDd03335D07B498A511213cDb9FDfB448EcA3",
        "Split ",
        "Splitwise clone",
        "niftybruh",
        "Hyperlane Interopability ",
        [
            "0x118EDd03335D07B498A511213cDb9FDfB448EcA3"
        ],
        true
    ],
    [
        "0x827C952A572CB99eF4AF7b9ec837c7438DA174e9",
        "SocialTruth",
        "Users rate their perceived veracity of arbitrary information. This rating is connected with the users' identities. Frontend allows to see aggregated veracity of any information filtered on any identity combination.",
        "1m1_dd",
        "Best Lens App",
        [
            "0x827C952A572CB99eF4AF7b9ec837c7438DA174e9"
        ],
        true
    ],
    [
        "0x5b69409589f98A28D70E96aA4c77086bE6Eb0816",
        "CarbonAccesss",
        "Create an interface to allow web3 and web2 users to purchase carbon credits and retire them so they can claim carbon neutrality and sign their sustainability values.",
        "rubrixks",
        "Celo, ENS, other stuff",
        [
            "0x5b69409589f98A28D70E96aA4c77086bE6Eb0816"
        ],
        true
    ],
    [
        "0xC328d4fCE08284941cec21d27041dCC5ba598529",
        "Ben's Team",
        "Making a fund manager",
        "anishp",
        "Polygon, aave, etc",
        [
            "0xC328d4fCE08284941cec21d27041dCC5ba598529"
        ],
        true
    ],
    [
        "0x84709fE82219B0dd7c3140F343f9827E376841e4",
        "Engage.gg",
        "Engage is a platform for content creators to reward their fanbase",
        "madhukar01",
        "Lens Protocol",
        [
            "0x84709fE82219B0dd7c3140F343f9827E376841e4"
        ],
        true
    ],
    [
        "0xD8e4D855cb8908B3DcC83c993aE02bC62a74F8b9",
        "GreenYield",
        "Don't let your money sleep on a bank account. Own it. Multiply it.",
        "/",
        "Privy, Unlimit, AAVE, Compound",
        [
            "0xD8e4D855cb8908B3DcC83c993aE02bC62a74F8b9"
        ],
        true
    ],
    [
        "0x0a2648aD71b4d80b08323dDa7e8AA412356C072b",
        "Autonomy",
        "Autonomy is an autonomous AI Agent and Data marketplace that allows users to buy, sell, and build composable AI systems.",
        "marissaposner",
        "Alliance DAO",
        [
            "0x0a2648aD71b4d80b08323dDa7e8AA412356C072b"
        ],
        true
    ],
    [
        "0xdAd67A985cE8Fa4A3eA01fAE4f41B2Cf6241eC1B",
        "TreeNFT ",
        "Open source dapp for environmental organizations ",
        "0xyezh",
        "Nouns and Celo",
        [
            "0xdAd67A985cE8Fa4A3eA01fAE4f41B2Cf6241eC1B",
            "0xEDc1a397589A0236C4810883b7d559288a5Fe7e1"
        ],
        true
    ],
    [
        "0x0E40C70C9ab5851B9809f3A7203b2BD626Af0a5f",
        "Eyeballs",
        "proof of personhood powered content paywall incentivizing sharing to drive virality",
        "hooswaking",
        "worldcoin",
        [
            "0x0E40C70C9ab5851B9809f3A7203b2BD626Af0a5f"
        ],
        true
    ],
    [
        "0x25BA43364BF720d8dFe3c2680CB4C232a29B093C",
        "RiceX",
        "crypto futures exchange with proof of data integrity",
        "0x_jp",
        "Arbitrum",
        [
            "0x25BA43364BF720d8dFe3c2680CB4C232a29B093C"
        ],
        true
    ],
    [
        "0x93c7c3f9394dEf62D2Ad0658c1c9b49919C13Ac5",
        "Ben Scheinberg",
        "Nft paying Royalties for AI datasets",
        "dov#0657",
        "Filecoin",
        [
            "0x93c7c3f9394dEf62D2Ad0658c1c9b49919C13Ac5"
        ],
        true
    ],
    [
        "0x9945fDd87b6E093A23fD83fe9613c23ca3820e1f",
        "Sidechain",
        "Peer-to-peer NFT swap ticket platform",
        "0xpeixer",
        "Base",
        [
            "0x9945fDd87b6E093A23fD83fe9613c23ca3820e1f"
        ],
        true
    ],
    [
        "0x5aE17E4Fe1f51A4f9EBebf9a82DF2Eb658ac7334",
        "ReCentiFi",
        "Utilize credit score system for ReFi volunteers to gate access to a platform that delivers a suite of services to its users.",
        "CryptoPapi#6016",
        "Filecoin",
        [
            "0x5aE17E4Fe1f51A4f9EBebf9a82DF2Eb658ac7334"
        ],
        true
    ],
    [
        "0xD00F24c1d859edBc23311E802C32B76274367e8D",
        "Talk 2 Chain",
        "use human language to talk to chains easily",
        "p_0k.",
        "tbd",
        [
            "0xD00F24c1d859edBc23311E802C32B76274367e8D"
        ],
        true
    ],
    [
        "0x7335f9669e27Eaf9bE0BA05D381EF3A22Bd40Bd6",
        "Datacache",
        "Monetize your data securely and freely. Join data bounties to earn erc20, erc721, and erc1155 rewards.",
        "https://discord.gg/brawlerbearz",
        "Polygon, Airstack, TheGraph, Metamask, Unlock, Unlimit",
        [
            "0x7335f9669e27Eaf9bE0BA05D381EF3A22Bd40Bd6"
        ],
        true
    ],
    [
        "0x88A0DC622bf67ade196DD469b71DBEBAa1632997",
        "Formed",
        "The decentralised form rewards system on your wallets",
        "discord.gg/malikabd#0683",
        "Xmtp, lens, worldcoin, UMA, walletconnect",
        [
            "0x88A0DC622bf67ade196DD469b71DBEBAa1632997"
        ],
        true
    ],
    [
        "0xFC3faC548c9BF7F45A5936Dd6e696D478257055e",
        "IDMixer",
        "Mix your identities to save your data",
        "discord.gg/_generalist",
        "Polygon ID",
        [
            "0xFC3faC548c9BF7F45A5936Dd6e696D478257055e"
        ],
        true
    ],
    [
        "0xEafA3731100600d9C004745d785D8d0e9AFB32cc",
        "CT",
        "CT - Update later",
        "annettac",
        "Pool Prize",
        [
            "0xEafA3731100600d9C004745d785D8d0e9AFB32cc"
        ],
        true
    ],
    [
        "0xa0D367c98A5c8d25FD61fa28941aC025c515F092",
        "PayBots",
        "Paypal Clone",
        "satoshinakamoto5245",
        "Celo",
        [
            "0xa0D367c98A5c8d25FD61fa28941aC025c515F092"
        ],
        true
    ],
    [
        "0x60eAf601Eea3748E9580C147325570048A26640f",
        "Zen2see",
        "Connecting Blockchain with AI",
        ".z2s.",
        "IPFS",
        [
            "0x60eAf601Eea3748E9580C147325570048A26640f"
        ],
        true
    ],
    [
        "0x4f57C7B6035BA7C480ce66bB9b9705377eb60eb3",
        "Cabal Protocol",
        "We empower young professionals to attend hackathons all over the world by sponsoring travel and housing accommodations. ",
        "https://discord.gg/3FYcrt25YH",
        "Safe",
        [
            "0x4f57C7B6035BA7C480ce66bB9b9705377eb60eb3"
        ],
        true
    ],
    [
        "0x985A29E88E75394DbDaE41a269409f701ccf6a43",
        "Unstable Peg",
        "We're building crosschain governance modules for gnosis safe using all the bridges",
        "pablo12335",
        "Polygon, Axelar",
        [
            "0x985A29E88E75394DbDaE41a269409f701ccf6a43"
        ],
        true
    ],
    [
        "0xDA22919e01E249Ba4c96DbA46beE29E4981835FC",
        "Blockhead.info",
        "Universal web3 interface. Track/visualize/explore all of crypto/DeFi/web3!",
        "https://discord.gg/966eXqqq7N",
        "Gnosis Chain › Frontend for Uniswap; Uniswap Foundation › Open/Innovation Prize",
        [
            "0xDA22919e01E249Ba4c96DbA46beE29E4981835FC"
        ],
        true
    ],
    [
        "0x1C7dcaf39f5675C89DD5D65894F1d4F108eCcCE7",
        "Xclusiv ",
        "Create exclusive telegram chats \n\nCreate holder-only chats, have members stake tokens, or create pay-to-view chat groups.",
        "alexqnder#0752",
        "Unlock Protocol",
        [
            "0x1C7dcaf39f5675C89DD5D65894F1d4F108eCcCE7"
        ],
        true
    ],
    [
        "0xD3DD405ACfE2F936A989DA9075AAC37AA6176426",
        "ChopBase",
        "Automated Smart Contract deployment tool. \"Vercel\" for SC deployment.",
        "eedi#0569",
        "Main Track",
        [
            "0xD3DD405ACfE2F936A989DA9075AAC37AA6176426"
        ],
        true
    ],
    [
        "0xc3CE3e1F53f4aFF093f9C92381E99F215A2f9763",
        "Match&Hack",
        "Match&Hack: Your go-to platform for hackers, simplifying team formation, connecting talents worldwide, and enhancing the hackathon experience. Find your perfect teammates effortlessly!",
        "demszig08#6963",
        "Lens, Airstack, PolygonID, XMTP",
        [
            "0xc3CE3e1F53f4aFF093f9C92381E99F215A2f9763"
        ],
        true
    ]
]

const hackBoardRegistryAddress = '0xC1FDf4678C684b2e8344057Eb9b37B7113b5d28b'; // Replace with your deployed contract address

const hackBoardRegistry = new ethers.Contract(hackBoardRegistryAddress, hackBoardRegistryABI, wallet);

// Old Team Data
const oldTeams = [
        [
            "0xc932b3a342658A2d3dF79E4661f29DfF6D7e93Ce",
            "HackBoard",
            "We're HackBoard, an EthGlobalNYC hackathon team trying to augment the inter-team dynamic at the hackathon, for better collaboration, brainstorming and social connection. As you can see, we currently have a basic site set up allowing teams to sign up and express interest in a potential predictions market. Learn more about the diverse teams here in New York to spark your own ideas. Best of luck to everyone!",
            "https://discord.gg/PRHxT96u",
            "Unsure",
            [
                "0xc932b3a342658A2d3dF79E4661f29DfF6D7e93Ce",
                "0x92a0925C3c08C12e6e2185595FF94a49c1dfB5fB"
            ],
            true
        ],
        [
            "0xBbbEc054d75b9f75a96AeD0BB3bfFA310777ac95",
            "Rizz",
            "Decentralized event service with nfts",
            "no discord link",
            "All of them.",
            [
                "0xBbbEc054d75b9f75a96AeD0BB3bfFA310777ac95"
            ],
            true
        ],
        [
            "0x0ef7819DcD6d13950c774D9B3d2a293f637b8f50",
            "Whatlet",
            "The WhatsApp dApp",
            "D9J9V",
            "Biconomy",
            [
                "0x0ef7819DcD6d13950c774D9B3d2a293f637b8f50"
            ],
            true
        ],
        [
            "0x228568EA92aC5Bc281c1E30b1893735c60a139F1",
            "Gremlins",
            "High-level language and compiler for querying blockchain.",
            "ricmoo",
            "Main",
            [
                "0x228568EA92aC5Bc281c1E30b1893735c60a139F1"
            ],
            true
        ],
        [
            "0xeC55Ef79e97a74239100f8DC804D0626EE6bDD7c",
            "StableHR",
            "We r not sure yet!",
            "",
            "anything with 20k",
            [
                "0xeC55Ef79e97a74239100f8DC804D0626EE6bDD7c"
            ],
            true
        ],
        [
            "0x0070cda707CB93870E4F51ce7ACacac58Adb8CB7",
            "GovernUs",
            "A Governance platform to allow web2 communities to self-govern more efficiently by leveraging web3 tools.",
            "marmaj819",
            "Near, polygon",
            [
                "0x0070cda707CB93870E4F51ce7ACacac58Adb8CB7"
            ],
            true
        ],
        [
            "0xF08a80E57E3E86434c6d47Ba133E0a08D0266f6c",
            "Topological Control ",
            "We are building a control module to track the topology of the Ethereum network",
            "eyal_42",
            "Main Prize",
            [
                "0xF08a80E57E3E86434c6d47Ba133E0a08D0266f6c"
            ],
            true
        ],
        [
            "0xBD4604F66C74d16BC74A20013071fAD49359C338",
            "Wisdom",
            "You'll see (or will you ?)",
            "",
            "Not sure",
            [
                "0xBD4604F66C74d16BC74A20013071fAD49359C338"
            ],
            true
        ],
        [
            "0xAA289325d1afc4AA040281b10dD9f10A8560D296",
            "SYLee",
            "We are making awesome DeFi Platform🔥",
            "dann0614",
            "Biconomy",
            [
                "0xAA289325d1afc4AA040281b10dD9f10A8560D296"
            ],
            true
        ],
        [
            "0x118EDd03335D07B498A511213cDb9FDfB448EcA3",
            "Split ",
            "Splitwise clone",
            "niftybruh",
            "Hyperlane Interopability ",
            [
                "0x118EDd03335D07B498A511213cDb9FDfB448EcA3"
            ],
            true
        ],
        [
            "0x118EDd03335D07B498A511213cDb9FDfB448EcA3",
            "Split ",
            "Splitwise clone",
            "niftybruh",
            "Hyperlane Interopability ",
            [
                "0x118EDd03335D07B498A511213cDb9FDfB448EcA3"
            ],
            true
        ],
        [
            "0x827C952A572CB99eF4AF7b9ec837c7438DA174e9",
            "SocialTruth",
            "Users rate their perceived veracity of arbitrary information. This rating is connected with the users' identities. Frontend allows to see aggregated veracity of any information filtered on any identity combination.",
            "1m1_dd",
            "Best Lens App",
            [
                "0x827C952A572CB99eF4AF7b9ec837c7438DA174e9"
            ],
            true
        ],
        [
            "0x5b69409589f98A28D70E96aA4c77086bE6Eb0816",
            "CarbonAccesss",
            "Create an interface to allow web3 and web2 users to purchase carbon credits and retire them so they can claim carbon neutrality and sign their sustainability values.",
            "rubrixks",
            "Celo, ENS, other stuff",
            [
                "0x5b69409589f98A28D70E96aA4c77086bE6Eb0816"
            ],
            true
        ],
        [
            "0xC328d4fCE08284941cec21d27041dCC5ba598529",
            "Ben's Team",
            "Making a fund manager",
            "anishp",
            "Polygon, aave, etc",
            [
                "0xC328d4fCE08284941cec21d27041dCC5ba598529"
            ],
            true
        ],
        [
            "0x84709fE82219B0dd7c3140F343f9827E376841e4",
            "Engage.gg",
            "Engage is a platform for content creators to reward their fanbase",
            "madhukar01",
            "Lens Protocol",
            [
                "0x84709fE82219B0dd7c3140F343f9827E376841e4"
            ],
            true
        ],
        [
            "0xD8e4D855cb8908B3DcC83c993aE02bC62a74F8b9",
            "GreenYield",
            "Don't let your money sleep on a bank account. Own it. Multiply it.",
            "/",
            "Privy, Unlimit, AAVE, Compound",
            [
                "0xD8e4D855cb8908B3DcC83c993aE02bC62a74F8b9"
            ],
            true
        ],
        [
            "0x0a2648aD71b4d80b08323dDa7e8AA412356C072b",
            "Autonomy",
            "Autonomy is an autonomous AI Agent and Data marketplace that allows users to buy, sell, and build composable AI systems.",
            "marissaposner",
            "Alliance DAO",
            [
                "0x0a2648aD71b4d80b08323dDa7e8AA412356C072b"
            ],
            true
        ]
    ];

async function importOldTeams() {
    for (const team of oldTeams) {
        const [teamAddress, name, description, discord, bountyTargets, , interestedInPredictionMarket] = team;
        console.log(teamAddress, name, description, discord, bountyTargets, interestedInPredictionMarket)
        // Call the importOldTeam function
        const tx = await hackBoardRegistry.importOldTeam(teamAddress, name, description, discord, bountyTargets, interestedInPredictionMarket);
        console.log(`Sent transaction with hash: ${tx.hash}`);

        await tx.wait();
        console.log(`Transaction ${tx.hash} confirmed!`);
    }

    console.log("All old teams imported successfully!");
}

// Execute the function
importOldTeams().catch(console.error);
