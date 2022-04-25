const { ethers } = require('hardhat');

async function main() {
    const contractFactory = await ethers.getContractFactory('NeoNFT');

    const deployedNFTContract = await contractFactory.deploy();

    console.log('Contract Address:', deployedNFTContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
