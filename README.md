# NFT implementation with ERC-721

This is a basic implementation of the token ERC-721 using Hardhat.

Create a new `.env` file in `solidity-nft` folder and add these
```javascript
ALCHEMY_API_KEY_URL=""  // Get this from your Alchemy project (https://dashboard.alchemyapi.io/)
PRIVATE_KEY="" // In Metamask, go to Account Details > Export Private Key
```

Then run these in a command line:
```shell
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
```

The contract address should be printed. 

### Example
An sample contract was deployed to Rinkeby:
https://rinkeby.etherscan.io/address/0x9C9807e02B9600fBF1B249F3cacFc4728fd3BfF4
