const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const Blog = sequelize.define(
  "Blog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "title",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "description",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "content",
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
    tableName: "blogs",
    timestamps: false,
  }
);

module.exports = Blog;
