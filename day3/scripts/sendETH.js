const hre = require("hardhat")
const {ethers, BigNumber} = require("ethers")

async function main() {
  const hardHatSigner = (await hre.ethers.getSigners())[0]

  const address0Balance = await hardHatSigner.getBalance()

  console.log("address 0 balance is ", address0Balance)

  const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"

  const txData = {
    to: toAddress,
    value: address0Balance.div(BigNumber.from(10))
  }

  const tx = await hardHatSigner.sendTransaction(txData)

  console.log("tx sent", tx.hash)

  await tx.wait()

  console.log("tx mined")

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
