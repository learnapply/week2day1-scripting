const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  let token;
  beforeEach(async () => {
    const Token = await ethers.getContractFactory("PortToken");
    token = await Token.deploy();
    await token.deployed();
  })

  it("Should be able to create tokens", async function () {
    const [signer0] = await ethers.getSigners();

    const createTx = await token.create(100);
    await createTx.wait();

    expect(await token.balances(signer0.address)).to.equal(100)
  })

  it("should have the correct owner", async function () {
    const [signer0, signer1] = await ethers.getSigners()

    const createTx = token.connect(signer1).create(1);  

    expect(createTx).to.be.reverted;
  });

  it("Should revert if tokens created exceed max supply", async function () {
    const totalSupply = await token.totalSupply(); 

    const createTx = token.create(totalSupply.add(100));

    await expect(createTx).to.be.reverted;
  })

  it("Should be able to send tokens", async function () {
    const [signer0, signer1] = await ethers.getSigners()

    const createTx = await token.create(100);
    await createTx.wait();

    expect(await token.balances(signer0.address)).to.equal(100)

    const sendTx = await token.send(signer1.address, 25);
    await sendTx.wait();

    expect(await token.balances(signer0.address)).to.equal(75)
    expect(await token.balances(signer1.address)).to.equal(25)
  })
  
  it("anyone can buy the token", async function () {
    const [signer0, signer1] = await ethers.getSigners()

    const createTx = await token.connect(signer1).buy({
      value: ethers.utils.parseEther("0.01")
    });
    await createTx.wait();

    expect(await token.balances(signer1.address)).to.equal(1)
  })
});
