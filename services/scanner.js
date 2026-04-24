const { log } = require("../utils/logger");

// Simulasi deteksi ancaman
const scanTransaction = (tx) => {
  log(`Scanning transaction: ${JSON.stringify(tx)}`);

  // contoh logic sederhana
  if (tx.amount > 10000) {
    return {
      safe: false,
      reason: "High-value transaction flagged"
    };
  }

  if (tx.to === "0x0000000000000000000000000000000000000000") {
    return {
      safe: false,
      reason: "Suspicious address detected"
    };
  }

  return {
    safe: true,
    reason: "Transaction is safe"
  };
};

module.exports = { scanTransaction };
