import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const Marketplace = await ethers.getContractFactory("NFTMarketplace");
  const market = await Marketplace.deploy();
  await market.deployed();

  console.log(`Marketplace deployed to: ${market.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
