const crypto = require("crypto-js");

// Function to generate SHA-256 hash
const calculateHash = (data) => {
    return crypto.SHA256(data).toString();
};

module.exports = { calculateHash };
