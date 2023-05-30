const express = require("express");
const app = express();

const pets = [
  { id: 1, name: "Max", type: "dog" },
  { id: 2, name: "Angel", type: "cat" },
  { id: 3, name: "Buddy", type: "dog" },
  { id: 4, name: "Daisy", type: "cat" },
];

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Authentication middleware
app.use((req, res, next) => {
  // Perform authentication logic here
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pets", (req, res) => {
  res.send(pets);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
