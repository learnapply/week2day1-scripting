const hre = require("hardhad");
const { ethers } = require("ethers");

async function main() {
  const signer = (await hre.ethers.getSigners())[0];

  const myBalance = await signer.getBalance();

  console.log("my balance", ethers.utils.formatEther(myBalance))
}