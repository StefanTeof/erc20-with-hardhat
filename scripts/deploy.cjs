// Import the entire Hardhat Runtime Environment
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const FinkiCoin = await hre.ethers.getContractFactory("FinkiCoin");
  const finkiCoin = await FinkiCoin.deploy();

  await finkiCoin.deployed();

  console.log("Finki Coin deployed to:", finkiCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
