const Busboy = require("busboy");
const path = require("path");
const os = require("os");
const fs = require("fs");

function parseFiles(req, fileSize) {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      // Return a "method not allowed" error
      return res.status(405).end();
    }
    const busboy = Busboy({
      headers: req.headers,
      limits: {
        fileSize,
      },
    });

    const tmpdir = os.tmpdir();

    // This object will accumulate all the fields, keyed by their name
    const fields = {};

    // This object will accumulate all the uploaded files, keyed by their name.
    const uploads = {};

    // This code will process each non-file field in the form.
    busboy.on("field", (fieldname, val) => {
      // TODO(developer): Process submitted field values here
      console.log(`Processed field ${fieldname}: ${val}.`);
      fields[fieldname] = val;
    });

    const fileWrites = [];
    // This code will process each file uploaded.
    busboy.on("file", (fieldname, file, { filename, encoding, mimeType }) => {
      // Note: os.tmpdir() points to an in-memory file system on GCF
      // Thus, any files in it must fit in the instance's memory.
      console.log(
        `Processed file: ${filename} | Encoding: ${encoding} | MIME: ${mimeType}`
      );

      const filepath = path.join(tmpdir, filename);
      console.log(filepath);
      uploads[fieldname] = {};
      uploads[fieldname].location = filepath;
      uploads[fieldname].path = filepath;
      uploads[fieldname].filename = filename;
      uploads[fieldname].encoding = encoding;
      uploads[fieldname].contentType = mimeType;

      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);

      // File was processed by Busboy; wait for it to be written to disk.
      const promise = new Promise((resolve, reject) => {
        file.on("end", () => {
          writeStream.end();
        });
        writeStream.on("finish", resolve);
        writeStream.on("error", reject);
      });
      file.on("limit", () => {
        throw {
          message: "File size limit reached",
        };
      });
      fileWrites.push(promise);
    });

    busboy.on("error", (error) => {
      reject(error);
    });

    // Triggered once all uploaded files are processed by Busboy.
    // We still need to wait for the disk writes (saves) to complete.
    busboy.on("finish", () => {
      Promise.all(fileWrites).then(() => {
        resolve(uploads);
      });
    });

    // busboy.end(req.rawBody);
    req.pipe(busboy);
  });
}

module.exports = parseFiles;
