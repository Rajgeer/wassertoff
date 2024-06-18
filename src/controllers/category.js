const Category = require('../models/CategoryModel');
class CategoryController {
    static getAllCategories = async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }; 
    static createCategory = async (req, res) => {
        try {
            const category = new Category(req.body);
            await category.save();
            res.status(201).json(category);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };
    static getCategoryById = async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) return res.status(404).json({ error: 'Category not found' });
            res.json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
    static updateCategory = async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!category) return res.status(404).json({ error: 'Category not found' });
            res.json(category);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };
    static deleteCategory = async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) return res.status(404).json({ error: 'Category not found' });
            res.json({ message: 'Category deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    };
};

module.exports= CategoryController;