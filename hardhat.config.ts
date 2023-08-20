import {HardhatUserConfig} from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox"; require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19", networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/66M3-okbd2JPI6TJ0IHldctpCyra_a78",
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "FHVFFRQFE9MKFEZZ8RA9PP98VSEPYPEE7J"
    }
  }
}
export default config;