const { scanTransaction } = require("../services/scanner");
const { log } = require("../utils/logger");

class Protector {
  constructor() {
    log("Protector initialized");
  }

  protect(tx) {
    const result = scanTransaction(tx);

    if (!result.safe) {
      log(`Blocked transaction: ${result.reason}`, "warn");
      return {
        status: "blocked",
        reason: result.reason
      };
    }

    log("Transaction approved");
    return {
      status: "approved",
      reason: result.reason
    };
  }
}

module.exports = Protector;
