# nasaa

### Overview

**NASAA Platform** is a decentralized application (dApp) that combines the power of blockchain-based crowdfunding and non-fungible tokens (NFTs). The platform allows creators to propose projects, raise funds, and mint unique NFTs as rewards for contributors. This project leverages Ethereum-compatible blockchain technology and IPFS for secure, decentralized storage of NFT metadata.

### Features

- **NFT Minting**: Creators can mint NFTs representing their projects, with metadata securely stored on IPFS (using Pinata).
- **Crowdfunding**: Users can submit project proposals, which, upon approval, are open for public funding. Contributors can support these projects with ETH and receive NFTs as rewards.
Verification Mechanism: The platform supports admin-based approval of project proposals to ensure the legitimacy and quality of projects.
- **Fund Management**: Funds are only released to project creators if the funding goal is met; otherwise, contributors can request a refund.
- **Decentralization**: The platform operates on a decentralized blockchain, ensuring transparency and security for all participants.

### Project Structure
```
.
├── backend
│   ├── database.py
│   ├── main.py
│   ├── pinata.py
│   ├── requirements.txt
│   ├── server.py
│   └── test2.py
├── cache
│   └── solidity-files-cache.json
├── contracts
│   ├── Nasaafunding.sol
│   ├── NasaafundNFT.sol
│   └── NasaafundPlatform.sol
├── hardhat.config.ts
├── ignition
│   └── modules
│       └── Lock.ts
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── test
│   └── NasaafundNFT.test.ts
└── tsconfig.json

```

**Smart Contracts**: Developed using Solidity and Hardhat, covering NFT minting, crowdfunding mechanics, and proposal verification.
Frontend: A React.js application allowing users to interact with the platform, connect their Web3 wallet, and manage their contributions.
Backend: A Flask application handling off-chain processes, such as metadata processing and database management (MongoDB).
IPFS Integration: Metadata and media files are stored securely on IPFS to reduce on-chain storage costs and ensure data integrity.


### Getting Started

#### Prerequisites
- Node.js
- Python 3
- Metamask or another Ethereum wallet
- Pinata API keys (for IPFS)

#### Installation
1. Clone the repository
```
git clone https://github.com/georgegoldman/nasaa.git
cd nasaa
```

2. Install dependencies:

```
npm install
cd backend
pip install -r requirements.txt

```

3. Configure environment variables in the .env file.

#### Deployment

1. Compile and deploy the smart contracts using Hardhat:

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network lisk-sepolia
```

2. Run the backend Flask application:

```
python app.py
```

3. Start the React frontend:

```
npm start
```
#### Usage
- **Connect Wallet:** Users connect their Web3 wallet (e.g., MetaMask) to the platform.
- **Create Proposal:** Submit a project proposal with all necessary details, including metadata stored on IPFS.
- **Fund Projects:** Users can contribute to approved projects and receive NFTs in return.
- **Track Progress:** Monitor the funding status of projects and withdraw or refund funds as applicable.

### Contributing
We welcome contributions from the community. Please read our contribution guidelines and feel free to submit pull requests or open issues.

### License
This project is licensed under the MIT License - see the LICENSE file for details.




