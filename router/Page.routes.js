const express = require("express");
const app = express();
const router = express.Router();
const ProductRepo = require("../repository/Product.repo");

// index page
router.get("/", async function (req, res) {
  const products = await ProductRepo.getAllProducts();
  res.render("pages/index", { products: products.splice(0, 3) });
});

// contact page
router.get("/contact", function (req, res) {
  res.render("pages/contact");
});

// products page
router.get("/products", async function (req, res) {
  const products = await ProductRepo.getAllProducts();
  res.render("pages/products", { products: products });
});

// search page

router.get("/search", async function (req, res) {
  const name = req.query.name || "";
  const sortBy = req.query.sortBy || "";
  const products = await ProductRepo.getAllProducts(name, sortBy);

  res.render("pages/search", { products: products });
});

module.exports = router;
