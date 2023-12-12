const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  createdAt: Date,
  updatedAt: Date,
});


module.exports = mongoose.model("Product", Product);