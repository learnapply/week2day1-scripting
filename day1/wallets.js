import "dotenv/config";
import { BigNumber, ethers } from "ethers";

// const wallet = ethers.Wallet.createRandom();
// console.log("address:", wallet.address)
// console.log("priv key:", wallet.privateKey)
// console.log("mnemonic:", wallet.mnemonic.phrase)

// let path, myWallet;

// for (let i = 0; i < 10; i++) {
//   path = `m/44'/60'/0'/0/${i}`
//   myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
//   console.log("address", i, myWallet.address);
//   console.log("private key", i, myWallet.privateKey)
// }

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);

const myBalance = await provider.getBalance(signer.address);

console.log(
  "sepolia balance of ",
  signer.address,
  ethers.utils.formatEther(myBalance)
);

const tx = {
  to: "0x64ae474dA28Db2Ef925b87E94a81C8F2783f6066",
  value: myBalance.div(BigNumber.from(10)),
};

const sentTx = await signer.sendTransaction(tx);

console.log("tx sent", tx);

await sentTx.wait();

console.log("tx confirmed");
