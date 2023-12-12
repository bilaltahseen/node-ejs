const ProductSchema = require("../models/Product.schema");

async function createProduct(product) {
  const createdProduct = await ProductSchema.create({ ...product, createdAt: new Date(), updatedAt: new Date() });
  return createdProduct;
}

async function getAllProducts(name, sortBy) {
  const search = name ? { name: { $regex: name, $options: "i" } } : {};
  let sorting = { createdAt: -1 };
  if (sortBy) {
    switch (sortBy) {
      case "price-asc":
        sorting = { price: 1 };
        break;
      case "price-desc":
        sorting = { price: -1 };
        break;
      case "createdAt-desc":
        sorting = { createdAt: -1 };
        break;
      default:
        break;
    }
  }
  const products = await ProductSchema.find({ ...search }, {}, { sort: sorting });
  return products;
}

async function getProductById(id) {
  const product = await ProductSchema.findById(id);
  return product;
}

async function updateProductById(id, product) {
  const updatedProduct = ProductSchema.findByIdAndUpdate(id, product);
  return updatedProduct;
}

async function deleteProductById(id) {
  const product = await ProductSchema.findByIdAndDelete(id);
  return product;
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
