const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_platform", "root", "sigma12345", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  // Add other database options as needed
});

module.exports = sequelize;
