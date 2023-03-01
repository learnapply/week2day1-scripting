import "dotenv/config"
import { ethers } from "ethers";

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.providers.JsonRpcProvider(infuraUrl)

const vitalikBalance = await provider.getBalance("vitalik.eth");
console.log("vitalik has", ethers.utils.formatEther(vitalikBalance))