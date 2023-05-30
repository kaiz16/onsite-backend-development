const express = require("express");
const app = express();
// Example using express-validator
const { body, validationResult } = require("express-validator");
app.use(express.json());

app.post(
  "/todos",
  [
    // Validate and sanitize input
    body("title").trim().isLength({ min: 5 }),
    body("dueDate").isISO8601(),
  ],
  (req, res) => {
    // Handle the validated input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process the valid input
    // ...
  }
);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
