const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config.js");

const Project = sequelize.define(
  "Project",
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
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "start_date",
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "due_date",
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: "completed",
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      field: "manager_id",
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
    tableName: "projects",
    timestamps: false,
  }
);

module.exports = Project;
