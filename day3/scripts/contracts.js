const hre = require("hardhat");
const { ethers, BigNumber } = require("ethers");

async function main() {
  const GreeterContractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
  const greeterContract = await hre.ethers.getContractAt(
    "Greeter",
    GreeterContractAddress
  );

  console.log("initial greeting", await greeterContract.greet());

  console.log("setting greeting...");
  const setTx = await greeterContract.setGreeting("does this work???");

  console.log("setTx sent!");

  await setTx.wait();

  console.log("setTx mined!");

  console.log("new greeting is ", await greeterContract.greet());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
