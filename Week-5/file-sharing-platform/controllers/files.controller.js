const { Op } = require("sequelize");
const File = require("../models/File.js");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bucket = require("../utils/bucket.util.js");
const fileParser = require("../utils/parser.util.js");

async function getAllFiles(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // Find all files that are public or created by the user with limit, offset, sortBy, and sortOrder.
    const files = await File.findAll({
      limit: limit,
      offset: offset,
      order: [[sortBy, sortOrder]],
      where: {
        isPublic: true,
      },
    });

    // Send all files as response.
    res.json(files);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getFileById(req, res) {
  try {
    // Find file by id.
    const file = await File.findByPk(parseInt(req.params.id), {
      where: {
        [Op.or]: [
          {
            isPublic: true,
          },
          {
            userId: req.user.id,
          },
        ],
      },
    });

    // Send file as response.
    res.json(file);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createFile(req, res) {
  try {
    // 4MB size limit.
    const files = await fileParser(req, 4000000);
    // Get file by field name. Meaning, if you send file using key 'myFile', you should use files['myFile'] instead.
    const file = files["file"];

    // Get the file extension
    const extension = file.filename.split(".").pop();

    // Create a new file name with random UUID and file extension.
    const name = `${uuidv4()}.${extension}`;
    file.location = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/files/${name}`;

    await bucket.upload(file.path, {
      destination: `files/${name}`,
      public: true,
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: "private",
        contentType: file.contentType,
        contentEncoding: file.encoding,
      },
    });

    // Create file using data from request body.
    // Request body must contain all required fields defined in File model.
    const data = await File.create({
      name: name,
      url: file.location,
      userId: req.user.id,
      isPublic: false,
    });

    // Send created file as response.
    res.json(data);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function toggleFilePrivacy(req, res) {
  try {
    // First find file by id.
    const existingFile = await File.findByPk(parseInt(req.params.id));
    if (!existingFile) throw "File not found";

    // Verify the owner of the file.
    if (existingFile.userId !== req.user.id) {
      throw "You are not authorized to update file for other users";
    }

    // Toggle file's isPublic field.
    const file = await File.update(
      {
        isPublic: !existingFile.isPublic,
      },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    );

    // Send updated file as response.
    res.json(file);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteFile(req, res) {
  try {
    // First find file by id.
    const existingFile = await File.findByPk(parseInt(req.params.id));
    if (!existingFile) throw "File not found";

    // Verify the owner of the file.
    if (existingFile.userId !== req.user.id) {
      throw "You are not authorized to delete file for other users";
    }

    // Delete file from storage.
    await bucket.file(`files/${existingFile.name}`).delete();

    // Delete file by id from database.
    // NOTE: Deleting a file will also delete all likes, replies associated with the file.
    const file = await File.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted file as response.
    res.json(file);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllFiles,
  getFileById,
  createFile,
  toggleFilePrivacy,
  deleteFile,
};
