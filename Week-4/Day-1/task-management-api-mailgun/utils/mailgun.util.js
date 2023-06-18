const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

// Assuming you have these from your .env
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

module.exports = {
  mg,
};
