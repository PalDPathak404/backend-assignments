const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 799, stock: 25, rating: 4.3 },
  { id: 2, name: "Running Shoes", category: "Footwear", price: 2499, stock: 40, rating: 4.5 },
  { id: 3, name: "Laptop Stand", category: "Accessories", price: 999, stock: 30, rating: 4.2 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 4999, stock: 12, rating: 4.4 },
  { id: 5, name: "Backpack", category: "Fashion", price: 1599, stock: 50, rating: 4.1 }
];

app.get("/products", function(req, res) {
  res.status(200).json(products);
});

app.get("/products/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      foundProduct = products[i];
      break;
    }
  }

  if (foundProduct === null) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json(foundProduct);
  }
});

app.get("/products/category/:categoryName", function(req, res) {

  let categoryName = req.params.categoryName;
  let result = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].category.toLowerCase() === categoryName.toLowerCase()) {
      result.push(products[i]);
    }
  }

  res.status(200).json(result);
});

app.post("/products", function(req, res) {

  let newId = 1;

  if (products.length > 0) {
    newId = products[products.length - 1].id + 1;
  }

  let newProduct = {
    id: newId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put("/products/:id", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {

      products[i].name = req.body.name;
      products[i].category = req.body.category;
      products[i].price = req.body.price;
      products[i].stock = req.body.stock;
      products[i].rating = req.body.rating;

      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "Product not found" });
  }
});

app.put("/products/:id/stock", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {

      products[i].stock = req.body.stock;

      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "Product not found" });
  }
});

app.put("/products/:id/price", function(req, res) {

  let id = parseInt(req.params.id);
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {

      products[i].price = req.body.price;

      found = true;
      res.status(200).json(products[i]);
      break;
    }
  }

  if (!found) {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(5000, function() {
  console.log("Server running on port 5000");
});