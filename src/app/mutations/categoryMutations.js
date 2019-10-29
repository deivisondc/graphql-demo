import Category from '../../../src/app/models/Category';

export default {
  createCategory: async (_, { name }) => {
    const newCategory = await Category.create({ name });
    return await Category.findById(newCategory._id);
  },

  updateCategory: async (_, { id, name }) => {
    const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
    return await Category.findById(updatedCategory._id);
  },

  deleteCategory: async (_, { id }) => await Category.findByIdAndRemove(id).exec() !== null,
}