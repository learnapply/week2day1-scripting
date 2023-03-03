const hre = require("hardhat")
const {ethers} = require("ethers")

async function main() {
  const localProviderUrl = "http://127.0.0.1:8545/"
  const provider = new ethers.providers.JsonRpcProvider(localProviderUrl)

  const account0Address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  const account0Balance = await provider.getBalance(account0Address)

  console.log("acc0 balance ", ethers.utils.formatEther(account0Balance))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
