const hre = require("hardhat");

async function main() {
  const MoodDiaryFactory = await hre.ethers.getContractFactory("MoodDiary");
  const MoodDiary = await MoodDiaryFactory.deploy();
  console.log("MoodDiary deployed to ", MoodDiary.address);
  // console.log("MoodDiary owner address", owner.address);

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
})
