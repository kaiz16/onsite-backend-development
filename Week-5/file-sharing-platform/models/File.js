const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const File = sequelize.define(
  "File",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "name",
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "url",
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "is_public",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "user_id",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at",
    },
  },
  {
    tableName: "files",
    timestamps: false,
  }
);

module.exports = File;
