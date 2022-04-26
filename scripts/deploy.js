const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const BankContractFactory = await hre.ethers.getContractFactory("MemeCoin");
  const BankContract = await BankContractFactory.deploy();
  console.log("MemeCoin deployed to ", BankContract.address);
  console.log("MemeCoin owner address ", owner.address);

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
})
