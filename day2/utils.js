import "dotenv/config";
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerUrl = mainnet
    ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
    : `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;

  return new ethers.providers.JsonRpcProvider(providerUrl);
};

const generateNewWallet = () => {
  const wallet = ethers.Wallet.createRandom();

  console.log("address:", wallet.address);
  console.log("priv key:", wallet.privateKey);
  console.log("mnemonic:", wallet.mnemonic.phrase);
};

const getSigner = (mainnet) => {
  const sepoliaProvider = getProvider();
  return new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, sepoliaProvider);
};

export {getProvider, generateNewWallet, getSigner}

// generateNewWallet();

// console.log("provider", await provider.getNetwork());
