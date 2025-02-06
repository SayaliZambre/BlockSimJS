const Block = require("./Block");

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
        this.pendingTransactions = [];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    addBlock() {
        const previousBlock = this.getLatestBlock();
        const newBlock = new Block(this.chain.length, this.pendingTransactions, previousBlock.hash);
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        this.pendingTransactions = []; // Clear pending transactions after adding a block
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;
