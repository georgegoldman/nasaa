/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  NasaafundNFT,
  NasaafundNFTInterface,
} from "../../contracts/NasaafundNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "NFTCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336040518060400160405280600c81526020017f4e6173616166756e644e465400000000000000000000000000000000000000008152506040518060400160405280600581526020017f4e464e465400000000000000000000000000000000000000000000000000000081525081600090816200009091906200047a565b508060019081620000a291906200047a565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200011a5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001119190620005a6565b60405180910390fd5b6200012b816200013a60201b60201c565b506000600781905550620005c3565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028257607f821691505b6020821081036200029857620002976200023a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002c3565b6200030e8683620002c3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200035b620003556200034f8462000326565b62000330565b62000326565b9050919050565b6000819050919050565b62000377836200033a565b6200038f620003868262000362565b848454620002d0565b825550505050565b600090565b620003a662000397565b620003b38184846200036c565b505050565b5b81811015620003db57620003cf6000826200039c565b600181019050620003b9565b5050565b601f8211156200042a57620003f4816200029e565b620003ff84620002b3565b810160208510156200040f578190505b620004276200041e85620002b3565b830182620003b8565b50505b505050565b600082821c905092915050565b60006200044f600019846008026200042f565b1980831691505092915050565b60006200046a83836200043c565b9150826002028217905092915050565b620004858262000200565b67ffffffffffffffff811115620004a157620004a06200020b565b5b620004ad825462000269565b620004ba828285620003df565b600060209050601f831160018114620004f25760008415620004dd578287015190505b620004e985826200045c565b86555062000559565b601f19841662000502866200029e565b60005b828110156200052c5784890151825560018201915060208501945060208101905062000505565b868310156200054c578489015162000548601f8916826200043c565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200058e8262000561565b9050919050565b620005a08162000581565b82525050565b6000602082019050620005bd600083018462000595565b92915050565b6123c380620005d36000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063c87b56dd11610071578063c87b56dd146102cb578063d082e381146102fb578063da2ed03e14610319578063e985e9c514610349578063f2fde38b1461037957610116565b80638da5cb5b1461025757806395d89b4114610275578063a22cb46514610293578063b88d4fde146102af57610116565b806323b872dd116100e957806323b872dd146101b557806342842e0e146101d15780636352211e146101ed57806370a082311461021d578063715018a61461024d57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b6101356004803603810190610130919061182b565b610395565b6040516101429190611873565b60405180910390f35b610153610477565b604051610160919061191e565b60405180910390f35b610183600480360381019061017e9190611976565b610509565b60405161019091906119e4565b60405180910390f35b6101b360048036038101906101ae9190611a2b565b610525565b005b6101cf60048036038101906101ca9190611a6b565b61053b565b005b6101eb60048036038101906101e69190611a6b565b61063d565b005b61020760048036038101906102029190611976565b61065d565b60405161021491906119e4565b60405180910390f35b61023760048036038101906102329190611abe565b61066f565b6040516102449190611afa565b60405180910390f35b610255610729565b005b61025f61073d565b60405161026c91906119e4565b60405180910390f35b61027d610767565b60405161028a919061191e565b60405180910390f35b6102ad60048036038101906102a89190611b41565b6107f9565b005b6102c960048036038101906102c49190611cb6565b61080f565b005b6102e560048036038101906102e09190611976565b61082c565b6040516102f2919061191e565b60405180910390f35b6103036108e3565b6040516103109190611afa565b60405180910390f35b610333600480360381019061032e9190611dda565b6108e9565b6040516103409190611afa565b60405180910390f35b610363600480360381019061035e9190611e23565b610967565b6040516103709190611873565b60405180910390f35b610393600480360381019061038e9190611abe565b6109fb565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610470575061046f82610a81565b5b9050919050565b60606000805461048690611e92565b80601f01602080910402602001604051908101604052809291908181526020018280546104b290611e92565b80156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b5050505050905090565b600061051482610aeb565b5061051e82610b73565b9050919050565b6105378282610532610bb0565b610bb8565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105ad5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105a491906119e4565b60405180910390fd5b60006105c183836105bc610bb0565b610bca565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610637578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161062e93929190611ec3565b60405180910390fd5b50505050565b6106588383836040518060200160405280600081525061080f565b505050565b600061066882610aeb565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106e25760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106d991906119e4565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610731610de4565b61073b6000610e6b565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461077690611e92565b80601f01602080910402602001604051908101604052809291908181526020018280546107a290611e92565b80156107ef5780601f106107c4576101008083540402835291602001916107ef565b820191906000526020600020905b8154815290600101906020018083116107d257829003601f168201915b5050505050905090565b61080b610804610bb0565b8383610f31565b5050565b61081a84848461053b565b610826848484846110a0565b50505050565b606061083782611257565b61084057600080fd5b60086000838152602001908152602001600020805461085e90611e92565b80601f016020809104026020016040519081016040528092919081815260200182805461088a90611e92565b80156108d75780601f106108ac576101008083540402835291602001916108d7565b820191906000526020600020905b8154815290600101906020018083116108ba57829003601f168201915b50505050509050919050565b60075481565b60006108f3610de4565b600060075490506109043382611298565b61090e81846112b6565b6007600081548092919061092190611f29565b9190505550807fe883eeefa7f620d513eac93479fc9f54ce03f9f4a72c0d818311a9d19556e87984604051610956919061191e565b60405180910390a280915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a03610de4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a755760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a6c91906119e4565b60405180910390fd5b610a7e81610e6b565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610af783611323565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b6a57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610b619190611afa565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610bc58383836001611360565b505050565b600080610bd684611323565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610c1857610c17818486611525565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ca957610c5a600085600080611360565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d2c576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610dec610bb0565b73ffffffffffffffffffffffffffffffffffffffff16610e0a61073d565b73ffffffffffffffffffffffffffffffffffffffff1614610e6957610e2d610bb0565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610e6091906119e4565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610f9991906119e4565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110939190611873565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611251578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026110e4610bb0565b8685856040518563ffffffff1660e01b81526004016111069493929190611fc6565b6020604051808303816000875af192505050801561114257506040513d601f19601f8201168201806040525081019061113f9190612027565b60015b6111c6573d8060008114611172576040519150601f19603f3d011682016040523d82523d6000602084013e611177565b606091505b5060008151036111be57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016111b591906119e4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461124f57836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161124691906119e4565b60405180910390fd5b505b50505050565b60008073ffffffffffffffffffffffffffffffffffffffff1661127983611323565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6112b28282604051806020016040528060008152506115e9565b5050565b6112bf82611257565b6112fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f5906120c6565b60405180910390fd5b8060086000848152602001908152602001600020908161131e9190612292565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806113995750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156114cd5760006113a984610aeb565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561141457508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561142757506114258184610967565b155b1561146957826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161146091906119e4565b60405180910390fd5b81156114cb57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611530838383611605565b6115e457600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115a557806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161159c9190611afa565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016115db929190612364565b60405180910390fd5b505050565b6115f383836116c6565b61160060008484846110a0565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156116bd57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061167e575061167d8484610967565b5b806116bc57508273ffffffffffffffffffffffffffffffffffffffff166116a483610b73565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117385760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161172f91906119e4565b60405180910390fd5b600061174683836000610bca565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117ba5760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016117b191906119e4565b60405180910390fd5b505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611808816117d3565b811461181357600080fd5b50565b600081359050611825816117ff565b92915050565b600060208284031215611841576118406117c9565b5b600061184f84828501611816565b91505092915050565b60008115159050919050565b61186d81611858565b82525050565b60006020820190506118886000830184611864565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156118c85780820151818401526020810190506118ad565b60008484015250505050565b6000601f19601f8301169050919050565b60006118f08261188e565b6118fa8185611899565b935061190a8185602086016118aa565b611913816118d4565b840191505092915050565b6000602082019050818103600083015261193881846118e5565b905092915050565b6000819050919050565b61195381611940565b811461195e57600080fd5b50565b6000813590506119708161194a565b92915050565b60006020828403121561198c5761198b6117c9565b5b600061199a84828501611961565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119ce826119a3565b9050919050565b6119de816119c3565b82525050565b60006020820190506119f960008301846119d5565b92915050565b611a08816119c3565b8114611a1357600080fd5b50565b600081359050611a25816119ff565b92915050565b60008060408385031215611a4257611a416117c9565b5b6000611a5085828601611a16565b9250506020611a6185828601611961565b9150509250929050565b600080600060608486031215611a8457611a836117c9565b5b6000611a9286828701611a16565b9350506020611aa386828701611a16565b9250506040611ab486828701611961565b9150509250925092565b600060208284031215611ad457611ad36117c9565b5b6000611ae284828501611a16565b91505092915050565b611af481611940565b82525050565b6000602082019050611b0f6000830184611aeb565b92915050565b611b1e81611858565b8114611b2957600080fd5b50565b600081359050611b3b81611b15565b92915050565b60008060408385031215611b5857611b576117c9565b5b6000611b6685828601611a16565b9250506020611b7785828601611b2c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611bc3826118d4565b810181811067ffffffffffffffff82111715611be257611be1611b8b565b5b80604052505050565b6000611bf56117bf565b9050611c018282611bba565b919050565b600067ffffffffffffffff821115611c2157611c20611b8b565b5b611c2a826118d4565b9050602081019050919050565b82818337600083830152505050565b6000611c59611c5484611c06565b611beb565b905082815260208101848484011115611c7557611c74611b86565b5b611c80848285611c37565b509392505050565b600082601f830112611c9d57611c9c611b81565b5b8135611cad848260208601611c46565b91505092915050565b60008060008060808587031215611cd057611ccf6117c9565b5b6000611cde87828801611a16565b9450506020611cef87828801611a16565b9350506040611d0087828801611961565b925050606085013567ffffffffffffffff811115611d2157611d206117ce565b5b611d2d87828801611c88565b91505092959194509250565b600067ffffffffffffffff821115611d5457611d53611b8b565b5b611d5d826118d4565b9050602081019050919050565b6000611d7d611d7884611d39565b611beb565b905082815260208101848484011115611d9957611d98611b86565b5b611da4848285611c37565b509392505050565b600082601f830112611dc157611dc0611b81565b5b8135611dd1848260208601611d6a565b91505092915050565b600060208284031215611df057611def6117c9565b5b600082013567ffffffffffffffff811115611e0e57611e0d6117ce565b5b611e1a84828501611dac565b91505092915050565b60008060408385031215611e3a57611e396117c9565b5b6000611e4885828601611a16565b9250506020611e5985828601611a16565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611eaa57607f821691505b602082108103611ebd57611ebc611e63565b5b50919050565b6000606082019050611ed860008301866119d5565b611ee56020830185611aeb565b611ef260408301846119d5565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f3482611940565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f6657611f65611efa565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000611f9882611f71565b611fa28185611f7c565b9350611fb28185602086016118aa565b611fbb816118d4565b840191505092915050565b6000608082019050611fdb60008301876119d5565b611fe860208301866119d5565b611ff56040830185611aeb565b81810360608301526120078184611f8d565b905095945050505050565b600081519050612021816117ff565b92915050565b60006020828403121561203d5761203c6117c9565b5b600061204b84828501612012565b91505092915050565b7f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006120b0602c83611899565b91506120bb82612054565b604082019050919050565b600060208201905081810360008301526120df816120a3565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026121487fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261210b565b612152868361210b565b95508019841693508086168417925050509392505050565b6000819050919050565b600061218f61218a61218584611940565b61216a565b611940565b9050919050565b6000819050919050565b6121a983612174565b6121bd6121b582612196565b848454612118565b825550505050565b600090565b6121d26121c5565b6121dd8184846121a0565b505050565b5b81811015612201576121f66000826121ca565b6001810190506121e3565b5050565b601f82111561224657612217816120e6565b612220846120fb565b8101602085101561222f578190505b61224361223b856120fb565b8301826121e2565b50505b505050565b600082821c905092915050565b60006122696000198460080261224b565b1980831691505092915050565b60006122828383612258565b9150826002028217905092915050565b61229b8261188e565b67ffffffffffffffff8111156122b4576122b3611b8b565b5b6122be8254611e92565b6122c9828285612205565b600060209050601f8311600181146122fc57600084156122ea578287015190505b6122f48582612276565b86555061235c565b601f19841661230a866120e6565b60005b828110156123325784890151825560018201915060208501945060208101905061230d565b8683101561234f578489015161234b601f891682612258565b8355505b6001600288020188555050505b505050505050565b600060408201905061237960008301856119d5565b6123866020830184611aeb565b939250505056fea2646970667358221220120c81ac4638d59354fa9c7e325ccdfd6a0c5d6352e2ab8972a223a686fa722664736f6c63430008170033";

type NasaafundNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NasaafundNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NasaafundNFT__factory extends ContractFactory {
  constructor(...args: NasaafundNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NasaafundNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NasaafundNFT__factory {
    return super.connect(runner) as NasaafundNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NasaafundNFTInterface {
    return new Interface(_abi) as NasaafundNFTInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NasaafundNFT {
    return new Contract(address, _abi, runner) as unknown as NasaafundNFT;
  }
}