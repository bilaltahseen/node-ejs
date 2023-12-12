var express = require("express");
var app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ProductRoutes = require("./router/Product.routes");
const PageRoutes = require("./router/Page.routes");

dotenv.config();
// set the view engine to ejs
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Page
app.use("/", PageRoutes);

// API
app.use("/api/products", ProductRoutes);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000);
    console.log("Server is listening on port 3000");
  })
  .catch((err) => {
    console.log(err);
  });
