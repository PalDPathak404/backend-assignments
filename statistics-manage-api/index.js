const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let states = [
  { id: 1, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 2, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
  { id: 3, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 5, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
  { id: 6, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
  { id: 7, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
  { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 }
];

app.get("/states", function(req, res) {
  res.status(200).json(states);
});

app.get("/states/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let foundState = null;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      foundState = states[i];
      break;
    }
  }

  if (foundState === null) {
    res.status(404).json({ message: "State not found" });
  } else {
    res.status(200).json(foundState);
  }
});

app.get("/states/highest-gdp", function(req, res) {

  let highest = states[0];

  for (let i = 1; i < states.length; i++) {
    if (states[i].gdp > highest.gdp) {
      highest = states[i];
    }
  }

  res.status(200).json(highest);
});

app.post("/states", function(req, res) {

  let newId = 1;

  if (states.length > 0) {
    newId = states[states.length - 1].id + 1;
  }

  let newState = {
    id: newId,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp
  };

  states.push(newState);

  res.status(201).json(newState);
});

app.put("/states/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      states[i].name = req.body.name;
      states[i].population = req.body.population;
      states[i].literacyRate = req.body.literacyRate;
      states[i].annualBudget = req.body.annualBudget;
      states[i].gdp = req.body.gdp;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.put("/states/:id/budget", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      states[i].annualBudget = req.body.annualBudget;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.put("/states/:id/population", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      states[i].population = req.body.population;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.patch("/states/:id/literacy", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      states[i].literacyRate = req.body.literacyRate;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.patch("/states/:id/gdp", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      states[i].gdp = req.body.gdp;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.patch("/states/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {

      if (req.body.name !== undefined)
        states[i].name = req.body.name;

      if (req.body.population !== undefined)
        states[i].population = req.body.population;

      if (req.body.literacyRate !== undefined)
        states[i].literacyRate = req.body.literacyRate;

      if (req.body.annualBudget !== undefined)
        states[i].annualBudget = req.body.annualBudget;

      if (req.body.gdp !== undefined)
        states[i].gdp = req.body.gdp;

      found = true;
      res.status(200).json(states[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "State not found" });
  }
});

app.delete("/states/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let index = -1;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    res.status(404).json({ message: "State not found" });
  } else {
    states.splice(index, 1);
    res.status(204).send();
  }
});

app.listen(5000, function() {
  console.log("Server running on port 5000");
});