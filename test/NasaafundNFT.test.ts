import { assert } from 'chai';
import {Web3, Contract, ContractAbi, AbiItem} from 'web3';
// import { Contract } from 'web3-eth-contract';
// import { AbiItem } from 'web3-utils';
import NasaafundNFT from '../artifacts/contracts/NasaafundNFT.sol/NasaafundNFT.json';

describe("NasaafundNFT Contract", function () {
  let nftContract: Contract<AbiItem[]>;
  let web3: Web3;
  let owner: string, addr1: string, addr2: string;

  before(async function () {
    // Set up Web3 provider (you can use Hardhat's local blockchain or Lisk dev environment)
    web3 = new Web3("http://localhost:8545"); // Or Lisk testnet connection

    const accounts = await web3.eth.getAccounts();
    owner = accounts[0];
    addr1 = accounts[1];
    addr2 = accounts[2];

    // Deploy the contract before running tests
    const deploy = new web3.eth.Contract(NasaafundNFT.abi as AbiItem[])
      .deploy({ data: NasaafundNFT.bytecode });

    nftContract = await deploy.send({ from: owner, gas: '1500000' });
  });

  it("Should deploy successfully", async function () {
    assert(nftContract.options.address !== undefined, "Contract was not deployed");
  });

  it("Should mint a new NFT and set tokenURI", async function () {
    const tokenURI = "ipfs://Qm...yourCID"; // Replace with actual CID
    await nftContract.methods.createNFT(tokenURI).send({ from: owner });

    const tokenId = 1; // Assuming first minted token
    const returnedTokenURI = await nftContract.methods.tokenURI(tokenId).call();
    assert.equal(returnedTokenURI, tokenURI, "Token URI was not set correctly");
  });

  it("Should check ownership of the NFT", async function () {
    const tokenId = 1;
    const nftOwner = await nftContract.methods.ownerOf(tokenId).call();
    assert.equal(nftOwner, owner, "Owner of the token is incorrect");
  });
});
