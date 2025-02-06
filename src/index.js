const Blockchain = require("./models/Blockchain");

(async () => {
    const chalk = (await import("chalk")).default;

    console.log(chalk.blue("🚀 Blockchain simulation started..."));

    const myBlockchain = new Blockchain();

    console.log(chalk.blue("🚀 Adding transactions..."));
    myBlockchain.addTransaction({ sender: "Alice", receiver: "Bob", amount: 10 });
    myBlockchain.addTransaction({ sender: "Charlie", receiver: "Dave", amount: 20 });

    console.log(chalk.green("\n🔨 Mining a new block..."));
    myBlockchain.addBlock();

    console.log(chalk.blue("\n🚀 Adding more transactions..."));
    myBlockchain.addTransaction({ sender: "Eve", receiver: "Frank", amount: 50 });

    console.log(chalk.green("\n🔨 Mining another block..."));
    myBlockchain.addBlock();

    console.log(chalk.yellow("\n🔍 Checking blockchain validity..."));
    console.log(`Blockchain valid: ${myBlockchain.isChainValid() ? chalk.green("✅ Yes") : chalk.red("❌ No")}`);

    console.log(chalk.cyan("\n🔗 Blockchain Data:\n"), JSON.stringify(myBlockchain, null, 4));
})();
