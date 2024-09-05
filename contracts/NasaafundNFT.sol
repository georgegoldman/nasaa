// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NFT minting smart contract

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NasaafundNFT is ERC721, Ownable(msg.sender) {
    uint256 public tokenCounter;
    mapping(uint256 => string) private _tokenURIs;

    event NFTCreated(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("NasaafundNFT", "NFNFT") {
        tokenCounter = 0;
    }

    function createNFT(string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter++;
        emit NFTCreated(newItemId, tokenURI);
        return newItemId;
    }

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal virtual {
        _tokenURIs[tokenId] = tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId));
    }

    function _exists(uint256 tokenId) internal view returns(bool) {
        return _ownerOf(tokenId) != address(0);
    }
}