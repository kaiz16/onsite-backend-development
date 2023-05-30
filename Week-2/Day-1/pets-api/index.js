const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

// In an actual application, this list of pets will be stored in a database
const pets = [
  { id: 1, name: "Butter", type: "cat", age: 2 },
  { id: 2, name: "Peanut", type: "dog", age: 3 },
  { id: 3, name: "Jelly", type: "cat", age: 1 },
];

app.get("/pets", (req, res) => {
  res.json(pets);
});

app.get("/pets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);

  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/pets", (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const age = req.body.age;
  const pet = { id: pets.length + 1, name, type, age }; // We're generating the ID here. In an actual application, the ID should be generated automatically by the database.
  pets.push(pet);
  res.json(pet);
});

app.put("/pets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);

  if (pet) {
    pet.name = req.body.name;
    pet.type = req.body.type;
    pet.age = req.body.age;
    res.json(pet);
  } else {
    res.status(404).send("Not found");
  }
});

app.delete("/pets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);

  if (pet) {
    const index = pets.indexOf(pet);
    pets.splice(index, 1);
    res.json(pet);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
