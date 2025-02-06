const Blockchain = require("../models/Blockchain");
const assert = require("assert");

const testBlockchain = () => {
    const blockchain = new Blockchain();
    
    blockchain.addTransaction({ sender: "Alice", receiver: "Bob", amount: 100 });
    blockchain.addBlock();

    blockchain.addTransaction({ sender: "Charlie", receiver: "Dave", amount: 50 });
    blockchain.addBlock();

    assert(blockchain.isChainValid(), "Blockchain should be valid!");

    // Tamper with a block
    blockchain.chain[1].transactions = [{ sender: "Hacker", receiver: "Bob", amount: 1000 }];
    
    assert(!blockchain.isChainValid(), "Blockchain should detect tampering!");

    console.log("✅ All tests passed!");
};

testBlockchain();
