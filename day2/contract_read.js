import { ethers } from "ethers";
import { getProvider } from "./utils";



const sepoliaProvider = getProvider()

new ethers.Contract(address, abi, sepoliaProvider)