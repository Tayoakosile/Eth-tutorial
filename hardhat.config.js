require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `${process.env.ALCHEMY_RINKEBY_URL}`,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`],
    },
  },

  etherscan: {
    apiKey: {
      rinkeby: "IIJUPSTH8F6C9SJB7T8RI6W9IH8SWFZSDM",
    },
  },
};
