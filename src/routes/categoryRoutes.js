const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category');
const Authority = require('../middlewares');
router.get('/', CategoryController.getAllCategories);
router.post('/', Authority.userAuth, CategoryController.createCategory);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', Authority.userAuth, CategoryController.updateCategory);
router.delete('/:id', Authority.userAuth, CategoryController.deleteCategory);

module.exports = router;
