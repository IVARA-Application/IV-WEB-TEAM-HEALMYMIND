const { MongoClient } = require("mongodb");

let db;

/**
 * Initialize a MonogDB Connection
 * @returns {db}
 */
async function initializeClient() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db();
}

module.exports = async () => {
  if (!db) {
    db = await initializeClient();
  }
  console.log("Connected to MongoDB");
  return db;
};
