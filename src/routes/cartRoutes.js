const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart');

router.get('/', CartController.getCart);
router.post('/add', CartController.addToCart);
router.post('/remove', CartController.removeFromCart);
router.post('/checkout', CartController.checkout);

module.exports = router;
