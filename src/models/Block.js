const crypto = require("crypto-js");

class Block {
    constructor(index, transactions, previousHash = "") {
        this.index = index;
        this.timestamp = new Date().toISOString();
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    // Function to calculate the block's hash
    calculateHash() {
        return crypto.SHA256(
            this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce
        ).toString();
    }

    // Proof-of-Work: Adjust nonce until hash starts with a certain number of zeros
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`⛏️ Block mined: ${this.hash}`);
    }
}

module.exports = Block;
