const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "email",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password",
    },
    role: {
      type: DataTypes.ENUM("admin", "manager", "employee"),
      allowNull: false,
      field: "role",
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: "is_email_verified",
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
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
