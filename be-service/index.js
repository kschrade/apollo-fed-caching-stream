const express = require("express");
const app = express();
const port = 4002;

const users = [
  {
    id: "1",
    name: "Ada Lovelace",
    birthDate: "1815-12-10",
    username: "@ada",
  },
  {
    id: "2",
    name: "Alan Turing",
    birthDate: "1912-06-23",
    username: "@complete",
  },
];
const products = [
  {
    upc: "1",
    name: "Table",
    price: 899,
    weight: 100,
    inStock: true,
  },
  {
    upc: "2",
    name: "Couch",
    price: 1299,
    weight: 1000,
    inStock: false,
  },
  {
    upc: "3",
    name: "Chair",
    price: 54,
    weight: 50,
    inStock: true,
  },
];
const reviews = [
  {
    id: "1",
    authorID: "1",
    product: { upc: "1" },
    body: "Love it!",
  },
  {
    id: "2",
    authorID: "1",
    product: { upc: "2" },
    body: "Too expensive.",
  },
  {
    id: "3",
    authorID: "2",
    product: { upc: "3" },
    body: "Could be better.",
  },
  {
    id: "4",
    authorID: "2",
    product: { upc: "1" },
    body: "Prefer something else.",
  },
];

const demoLogger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${formatted_date}] ${method}:${url} ${status}`;
  console.log(log);
  next();
};

app.use(demoLogger);

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/reviews", (req, res) => {
  res.send(reviews);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
