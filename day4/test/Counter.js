const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counterContract;

  it("should increment", async function () {
    const [signer0] = await ethers.getSigners();
    console.log("deploying contract as", signer0.address)
    const Counter = await ethers.getContractFactory("Counter");
    counterContract = await Counter.deploy(0);
    await counterContract.deployed();
    
    expect(await counterContract.count()).to.equal(0);

    const incTx = await counterContract.inc();
    await incTx.wait();

    expect(await counterContract.count()).to.equal(1);
  });

  it("should have the correct owner", async function () {
    const [signer0] = await ethers.getSigners();
    console.log("deploying contract as", signer0.address)
    const Counter = await ethers.getContractFactory("Counter");
    counterContract = await Counter.deploy(0);
    await counterContract.deployed();

    expect(await counterContract.owner()).to.equal(signer0.address);
  });
});
