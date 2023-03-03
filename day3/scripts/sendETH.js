const hre = require("hardhat")
const {ethers} = require("ethers")

async function main() {
  const hardHatSigner = await hre.ethers
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
