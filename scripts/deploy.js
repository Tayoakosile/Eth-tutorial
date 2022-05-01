const hre = require("hardhat");

async function main() {
  const BlockChainQuizFactory = await hre.ethers.getContractFactory("BlockChainQuiz");
  const BlockChainQuiz = await BlockChainQuizFactory.deploy();
  await BlockChainQuiz.deployed();
  console.log("MoodDiary deployed to", BlockChainQuiz.address);
  // console.log("MoodDiary owner address", owner.address);

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
})