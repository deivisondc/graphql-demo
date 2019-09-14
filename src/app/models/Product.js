const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  availableColor: [{
    type: String,
    require: true
  }],
  minimumOrder: {
    type: Number,
    require: true,
    default: 1
  },
  isActive: {
    type: Boolean,
    require: true,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;