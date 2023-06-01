const express = require("express");
const app = express();

const pets = [
  { id: 1, name: "Max", type: "dog" },
  { id: 2, name: "Angel", type: "cat" },
  { id: 3, name: "Buddy", type: "dog" },
  { id: 4, name: "Daisy", type: "cat" },
  { id: 5, name: "Rocky", type: "dog" },
  { id: 6, name: "Luna", type: "cat" },
  { id: 7, name: "Charlie", type: "dog" },
  { id: 8, name: "Milo", type: "cat" },
  { id: 9, name: "Bailey", type: "dog" },
  { id: 10, name: "Lucy", type: "cat" },
  { id: 11, name: "Cooper", type: "dog" },
  { id: 12, name: "Chloe", type: "cat" },
  { id: 13, name: "Maximus", type: "dog" },
  { id: 14, name: "Lily", type: "cat" },
  { id: 15, name: "Rocky", type: "dog" },
  { id: 16, name: "Sophie", type: "cat" },
  { id: 17, name: "Oliver", type: "dog" },
  { id: 18, name: "Mia", type: "cat" },
  { id: 19, name: "Tucker", type: "dog" },
  { id: 20, name: "Coco", type: "cat" },
  { id: 21, name: "Duke", type: "dog" },
  { id: 22, name: "Luna", type: "cat" },
  { id: 23, name: "Bentley", type: "dog" },
  { id: 24, name: "Stella", type: "cat" },
  { id: 25, name: "Leo", type: "dog" },
  { id: 26, name: "Sadie", type: "cat" },
  { id: 27, name: "Jack", type: "dog" },
  { id: 28, name: "Molly", type: "cat" },
  { id: 29, name: "Charlie", type: "dog" },
  { id: 30, name: "Kitty", type: "cat" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pets", (req, res) => {
  let offset = parseInt(req.query.offset); // 1
  let limit = parseInt(req.query.limit); // 10

  // Calculate the start index of the first page
  const start = (offset - 1) * limit;

  // Fetch the first page of pets. In reality, this should be coming from the database.
  const paginated = pets.slice(start, start + limit);

  if (!paginated.length) {
    return res.status(404).send("Page not found. Must provide valid offset and limit. Try offset=1&limit=10");
  }
  res.send(paginated);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
