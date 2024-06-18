require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers"); 

const { mnemonic, project_id, etherscan_key } = require('./secrets.json');

module.exports =  {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${project_id}`,
      accounts: { mnemonic: mnemonic }
    }
  },
  etherscan: {
    apiKey: etherscan_key
  }
};
