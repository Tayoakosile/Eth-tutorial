require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url:`${process.env.ALCHEMY_ROPSTEN_URL}`,
      accounts:[`${process.env.RINKEBY_PRIVATE_KEY}`],
    }
  }
};