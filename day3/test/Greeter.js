const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Greeter", function () {
  let greeterContract;
  beforeEach(async () => {
    const Greeter = await ethers.getContractAt("0x054BEAF337A6fAd938c8858B475D854C9447969B");
    greeterContract = await Greeter.deploy("hello world");
    await greeterContract.deployed();
  })

  it("Should return the new greeting once it's changed", async function () {
    expect(await greeterContract.greet()).to.equal("hello world")

    const setGreetingTx = await greeterContract.setGreeting("hola mundo")

    await setGreetingTx.wait();

    expect(await greeterContract.greet()).to.equal("hola mundo")
  })
  it("Should revert when it is locked", async function() {
    const toggleUnlockedTx = await greeterContract.toggleUnlocked()

    await toggleUnlockedTx.wait();

    await expect(greeterContract.setGreeting("hola mundo")).to.be.reverted;
  })
})