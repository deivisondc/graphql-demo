import Product from '../../../src/app/models/Product';

export default {
  createProduct: (_, { payload }) => {
    return Product.create(payload)
      .then(product => Product.findById(product._id).populate(['category']))
  },

  updateProduct: (_, { id, payload }) => {
    return Product.findByIdAndUpdate(id, payload, { new: true })
      .then(async product => await Product.findById(product._id).populate(['category']))
  },

  deleteProduct: async (_, { id }) => await Product.findByIdAndRemove(id).exec() !== null,
}