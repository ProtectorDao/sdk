const log = (message, type = "info") => {
  const time = new Date().toISOString();

  switch (type) {
    case "error":
      console.error(`[ERROR] ${time} - ${message}`);
      break;
    case "warn":
      console.warn(`[WARN] ${time} - ${message}`);
      break;
    default:
      console.log(`[INFO] ${time} - ${message}`);
  }
};

module.exports = { log };
