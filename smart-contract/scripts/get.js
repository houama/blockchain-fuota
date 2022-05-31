// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const fuotaFactory = await hre.ethers.getContractFactory("Fuota");
  const fuota = await fuotaFactory.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  const getSpecific = await fuota.getSpecificRegisteredDevice(
    "0x71be63f3384f5fb98995898a86b02fb2426c5788"
  );

  console.log(`registered device = ${getSpecific}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
