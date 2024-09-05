// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Crowdfunding smart contract

contract Nasaafunding {

    struct Proposal {
        uint256 id;
        address payable creator;
        uint256 targetAmount;
        uint256 currentAmount;
        uint256 deadline;
        bool approved;
        bool fundingSuccessful;
        bool fundsWithdrawn;
    }

    uint256 public proposalCounter;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => uint256)) public contributions;
    address public admin;

    event ProposalCreated(uint256 indexed proposalId, address creator, uint256 targetAmount, uint256 deadline);
    event ProposalApproved(uint256 indexed proposalId);
    event ContributionMade(uint256 indexed proposalId, address contributor, uint256 amount);
    event FundsWithdrawn(uint256 indexed proposalId, uint amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyCreator(uint256 proposalId) {
        require(msg.sender == proposals[proposalId].creator);
        _;
    }

    constructor() {
        admin  = msg.sender;
    }

    function createProposal(uint256 targetAmount, uint256 duration) public returns (uint256) {
        proposalCounter++;
        proposals[proposalCounter] = Proposal({
            id: proposalCounter,
            creator: payable(msg.sender),
            targetAmount: targetAmount,
            currentAmount: 0,
            deadline: block.timestamp + duration,
            approved: false,
            fundingSuccessful: false,
            fundsWithdrawn: false
        });

        emit ProposalCreated(proposalCounter, msg.sender, targetAmount, block.timestamp + duration);
        return proposalCounter;
    }

    function approveProposal(uint256 proposalId) public onlyAdmin {
        proposals[proposalId].approved = true;
        emit ProposalApproved(proposalId);
    }

    function contribute(uint256 proposalId) public payable {
        require(proposals[proposalId].approved, "Proposal is not approved");
        require(block.timestamp < proposals[proposalId].deadline, "Proposal deadline has passed");
        require(proposals[proposalId].currentAmount < proposals[proposalId].targetAmount, "Target amount reached");

        contributions[proposalId][msg.sender] += msg.value;
        proposals[proposalId].currentAmount += msg.value;

        emit ContributionMade(proposalId, msg.sender, msg.value);

        if (proposals[proposalId].currentAmount >= proposals[proposalId].targetAmount) {
            proposals[proposalId].fundingSuccessful = true;
        }
    }

    function withdrawFunds(uint256 proposalId) public onlyCreator(proposalId) {
        require(proposals[proposalId].fundingSuccessful, "Funding not successful");
        require(!proposals[proposalId].fundsWithdrawn, "Funds already withdrawn");

        proposals[proposalId].fundsWithdrawn = true;
        proposals[proposalId].creator.transfer(proposals[proposalId].currentAmount);

        emit FundsWithdrawn(proposalId, proposals[proposalId].currentAmount);
    }

    function refund(uint256 proposalId) public {
        require(block.timestamp > proposals[proposalId].deadline, "Funding period is over");
        require(!proposals[proposalId].fundingSuccessful, "Funding was successfull");
        require(contributions[proposalId][msg.sender] > 0, "No contribution made by  this address");
        
        uint256 amount = contributions[proposalId][msg.sender];
        contributions[proposalId][msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}

