import Product from '../../../src/app/models/Product';

export default {
  createProduct: async (_, { payload }) => {
    const newProduct = await Product.create(payload);
    return await Product.findById(newProduct._id).populate(['category']);
  },

  updateProduct: async (_, { id, payload }) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, payload, { new: true })
    return await Product.findById(updatedProduct._id).populate(['category']);
  },

  deleteProduct: async (_, { id }) => await Product.findByIdAndRemove(id).exec() !== null,
}