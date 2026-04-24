require("dotenv").config();
const Protector = require("./core/protector");

const protector = new Protector();

// Simulasi transaksi
const transactions = [
  { to: "0x123", amount: 100 },
  { to: "0x0000000000000000000000000000000000000000", amount: 50 },
  { to: "0x456", amount: 20000 }
];

transactions.forEach((tx) => {
  const result = protector.protect(tx);
  console.log("Result:", result);
});
