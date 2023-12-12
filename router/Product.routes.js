const express = require('express');
const app = express();
const router = express.Router();
const ProductRepo = require('../repository/Product.repo');

router.post('/', async (req, res) => {
    await ProductRepo.createProduct(req.body);
    res.json({ message: 'Product created' }).status(201); 
});

router.get('/', async (req, res) => {
    const name = req.query.name || '';
    const sortBy = req.query.sortBy || '';
    const products = await ProductRepo.getAllProducts(name, sortBy);
    res.json(products).status(200);
});

router.get('/:id', async (req, res) => {
    const product = await ProductRepo.getProductById(req.params.id);
    res.json(product).status(200);
});

router.put('/:id', async (req, res) => {
    await ProductRepo.updateProductById(req.params.id, req.body);
    res.json({ message: 'Product updated' }).status(200);
});

router.delete('/:id', async (req, res) => {
    await ProductRepo.deleteProductById(req.params.id);
    res.json({ message: 'Product deleted' }).status(200);
});


module.exports = router;