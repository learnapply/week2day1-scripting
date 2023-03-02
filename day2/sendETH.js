import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

// connect to mainnet to resolve ens using getProvider from ./utils
const mainnetProvider = getProvider(true);
// get signer from ./utils
const sepoliaSigner = getSigner();

// get the address balance using top level await
const myBalance = await sepoliaSigner.getBalance();

console.log("my balance is ", ethers.utils.formatEther(myBalance));

const pieruAddy = await mainnetProvider.resolveName("pieru.eth");

console.log("sending eth to ", pieruAddy);

// send 1/10 of the address balance to "to" address
const txData = {
  to: pieruAddy,
  value: myBalance.div(BigNumber.from(10)),
};

const tx = await sepoliaSigner.sendTransaction(txData);

console.log("tx sent", tx.hash);

await tx.wait();

console.log("tx confirmed");
