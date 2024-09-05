// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Main platform contract integrating both

import "./Nasaafunding.sol";
import "./NasaafundNFT.sol";

contract NasaaPlatform is NasaafundNFT, Nasaafunding {

    function createProposalwithNFT(
        uint256 targetAmount,
        uint256 duration,
        string memory tokenURI
    ) public returns(uint256) {
        uint256 proposalId = createProposal(targetAmount, duration);
        createNFT(tokenURI);
        return proposalId;
    }

    function mintNFTForContributor(uint256 proposalId) public {
        require(proposals[proposalId].fundingSuccessful, "Funding not successful");
        require(contributions[proposalId][msg.sender] > 0, "No contribution made");

        // Mint an  Nft to the contributor
        createNFT("ipfs://CID"); // Replace "ipfs://CID" with actual IPFS CID from Pinata
    }

    constructor() {
        
    }
}