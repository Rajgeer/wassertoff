const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    img:{ type: String },
    description: String,
    inStock: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);
