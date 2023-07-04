const { Storage } = require("@google-cloud/storage");
const path = require("path");
// Creates a client from a Google service account key.
const gc = new Storage({
  keyFilename: path.join(__dirname, "../config/service-account.json"),
  projectId: process.env.PROJECT_ID,
});

const bucket = gc.bucket(process.env.BUCKET_NAME);

module.exports = bucket;
