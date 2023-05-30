const express = require("express");
const app = express();

const pets = [
  { id: 1, name: "Max", type: "dog" },
  { id: 2, name: "Angel", type: "cat" },
  { id: 3, name: "Buddy", type: "dog" },
  { id: 4, name: "Daisy", type: "cat" },
];

app.get("/todos", (req, res, next) => {
  // An error occurs
  const error = new Error("Internal Server Error");
  error.status = 500;
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
