const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');
const Authority = require('../middlewares');
router.get('/', ProductController.getAllProducts);
router.post('/', Authority.userAuth, ProductController.createProduct);
router.get('/:id', ProductController.getProductById);
router.put('/:id', Authority.userAuth, ProductController.updateProduct);
router.delete('/:id', Authority.userAuth, ProductController.deleteProduct);

module.exports = router;
