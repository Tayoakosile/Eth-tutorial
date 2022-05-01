const quiz = {
  Blockchain: [
    {
      question: "What does P2P stand for?",

      answers: ["Password to Password", "Product to Product", "Peer to Peer"],
      correct: "Peer to Peer",
    },
    {
      question: "What is a node?",

      answers: [
        " A computer on a Blockchain network",
        "A type of cryptocurrency",
        "A Blockchain",
      ],
      correct: "A computer on a Blockchain network",
    },
    {
      question: "What’s MetaMask used for ",

      answers: [
        " A Browser plugin that generates and stores private keys",
        "A browser plugin that must interact with Infura to sign transactions",
        "A browser plugin that connects to Infura to mainly show your account balance",
      ],
      correct:
        "A browser plugin that must interact with Infura to sign transactions",
    },
    {
      question: "Who is the founder of Ethereum?",
      answers: ["Mike o'Hearn", "Vitalik Buterin", "Max Kaiser"],
      correct: "Vitalik Buterin",
    },
    {
      question:
        "How long does it take, on average, to mine a block in Ethereum?",
      answers: ["20-30 seconds", "30-40 seconds", "10 Minutes like Bitcoin"],
      correct: "Vitalik Buterin",
    },
    {
      question: "What is an Ether in Ethereum?",
      answers: [
        "A name for the cloud computing process of Ethereum contracts",
        "The main denomination used in Ethereum",
        "A method of redistributing Ethereum via mining",
      ],
      correct: "The main denomination used in Ethereum",
    },
    {
      question: "What is an Ether in Ethereum?",
      answers: [
        "A name for the cloud computing process of Ethereum contracts",
        "The main denomination used in Ethereum",
        "A method of redistributing Ethereum via mining",
      ],
      correct: "The main denomination used in Ethereum",
    },
    {
      question: "Who introduced the concept of Smart Contracts?",
      answers: ["Vitalik Buterin", "Satoshi Nakamoto", "Nick Szabo"],
      correct: "Nick Szabo",
    },

    {
      question:
        "Ethereum is in the process of moving to which consensus algorithm?",
      answers: ["Proof of timestamps", "Proof of History", "Proof of Stake"],
      correct: "Proof of Stake",
    },

    {
      question: "What does the Solidity keyword pramga do?",
      answers: [
        "Connect to the Ganache network",
        "Imports Solidity",
        "Defines the Solidity version",
      ],
      correct: "Defines the Solidity version",
    },

    {
      question:
        "To be able to call a function from outside the contract, which modifier must you add?",
      answers: ["In memory", "address", "public"],
      correct: "public",
    },

    {
      question: "What is an Ethereum?",
      answers: [
        "Private software platform based upon Blockchain technology",
        "Open software platform based upon Blockchain technology",
        "Centralized platform",
      ],
      correct: "Open software platform based upon Blockchain technology",
    },
  ],
  NFT: [
    {
      question: "Which blockchain hosts the most NFTs?",

      answers: ["Dogcoin", "Bitcoin", "Ethereum"],
      correct: "Ethereum",
    },
    {
      question: "What is the largest NFT marketplace by trading volume?",

      answers: ["Binance NFT", "AtomicHub", "Opensea"],
      correct: "Opensea",
    },

    {
      question: "What does ‘minting an NFT’ mean?This question is required. ",

      answers: [
        "Investing in crypto minting",
        "Selling an NFT on a marketplace",
        "Creating an NFT",
      ],
      correct: "Creating an NFT",
    },

    {
      question: "What does ‘minting an NFT’ mean?This question is required. ",

      answers: [
        "Investing in crypto minting",
        "Selling an NFT on a marketplace",
        "Creating an NFT",
      ],
      correct: "Creating an NFT",
    },

    {
      question:
        "Which of the following is an unsafe way to store NFTs?This question is required.",

      answers: ["IPFS", "Ethereum blockchain", "Centralised server"],
      correct: "Centralised server",
    },

    {
      question:
        "What is the technical standard for NFTs on the Ethereum blockchain?",

      answers: ["ERC-721", "ERC-20", "ERC-127"],
      correct: "ERC-721",
    },

    {
      question:
        "Which NFT art project has generated the most revenue in sales?This question is required?",

      answers: ["CryptoPunks", "Phoebe Buffay", "Bored Ape Yacht Club"],
      correct: "CryptoPunks",
    },

    {
      question: "Which of the following industries are involved with NFTs?",

      answers: ["All of the below", "Art", "Entertainment"],
      correct: "All of the below",
    },
  ],
  Smart: [
    {
      question: "What is the programming language for Ethereum smart contract?",

      answers: ["Solidity", "Truffle", "Node.js"],
      correct: "Solidity",
    },

    {
      question: "Remix is a IDE, IDE stands for?",

      answers: [
        "Integrated Development Environment",
        "Integrated Dapp Environment",
        "Internet Development Environment",
      ],
      correct: "Integrated Development Environment",
    },

    {
      question: "Which of the following is an example of String value?",

      answers: ["false", "12345", "Hey Susan!"],
      correct: "Hey Susan!",
    },
    {
      question: "Ropsten, Rinkeby and Kovan are examples of?",

      answers: ["Dapps", "Testnet", "Mainnet"],
      correct: "Testnet",
    },

    {
      question: "What is ERC20?",

      answers: ["Token Standard", "Testnet", "Mainnet"],
      correct: "Testnet",
    },

    {
      question: '"msg.data", "msg.sender", "msg.gas" are?',

      answers: ["Global Variables", "Local Variables", "Unique Variables"],
      correct: "Global Variables",
    },
  ],
};

export default quiz;

// n = 5 to export 5 question
