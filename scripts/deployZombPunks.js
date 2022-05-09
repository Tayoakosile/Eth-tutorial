const hre = require("hardhat");

async function main() {
  // const [owner] = await hre.ethers.getSigners();
  const ZombPunksNFTFactory = await hre.ethers.getContractFactory(
    "RoboPunksNFT"
  );
  const roboPunksNFT = await ZombPunksNFTFactory.deploy();
  console.log("RobopunkNFT deployed to ", roboPunksNFT.address);
  // console.log("MemeCoin owner address ", owner.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//  0x8fb09e9f205528ccf79a5ebabc3ad2cabcc65c38;