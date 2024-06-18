const Product = require('../models/ProductModel');
class ProductController{
    static getAllProducts = async (req, res) => {
        try {
            const products = await Product.find().populate('category');
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static createProduct = async (req, res) => {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(201).json({message:'Product add success!', values: product});
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }; 
    static getProductById = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id).populate('category');
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static updateProduct = async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.json(product);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };
    static deleteProduct = async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) return res.status(404).json({ error: 'Product not found' });
            res.json({ message: 'Product deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    
}

module.exports = ProductController;
