const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');
class CartController {
    static getCart = async (req, res) => {
        try {
            const cart = await Cart.findOne();
            if (!cart) return res.status(404).json({ error: 'Cart not found' });
            res.json(cart);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static addToCart = async (req, res) => {
        try {
            const { productId, quantity } = req.body;
            const product = await Product.findById(productId);
            if (!product) return res.status(404).json({ error: 'Product not found' });
    
            let cart = await Cart.findOne();
            if (!cart) {
                cart = new Cart({ products: [], totalPrice: 0 });
            }
    
            const existingProductIndex = cart.products.findIndex(p => p.product.equals(productId));
            if (existingProductIndex > -1) {
                cart.products[existingProductIndex].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }
    
            cart.totalPrice += product.price * quantity;
            await cart.save();
    
            res.json(cart);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };

    static removeFromCart = async (req, res) => {
        try {
            const { productId } = req.body;
            const cart = await Cart.findOne();
            if (!cart) return res.status(404).json({ error: 'Cart not found' });
    
            const productIndex = cart.products.findIndex(p => p.product.equals(productId));
            if (productIndex === -1) return res.status(404).json({ error: 'Product not found in cart' });
    
            const product = await Product.findById(productId);
            if (!product) return res.status(404).json({ error: 'Product not found' });
    
            cart.totalPrice -= product.price * cart.products[productIndex].quantity;
            cart.products.splice(productIndex, 1);
    
            await cart.save();
            res.json(cart);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
    static checkout = async (req, res) => {
        try {
            let cart = await Cart.findOne();
            if (!cart) return res.status(404).json({ error: 'Cart not found' });
    
            // Process checkout (e.g., payment gateway integration)
    
            // Clear the cart
            cart.products = [];
            cart.totalPrice = 0;
            await cart.save();
    
            res.json({ message: 'Checkout successful', cart });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
}

module.exports = CartController;
