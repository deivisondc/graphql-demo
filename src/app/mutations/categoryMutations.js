import Category from '../../../src/app/models/Category';

export default {
  createCategory: (_, { name, description }) => {
    return Category.create({ name, description })
      .then(async category => await Category.findById(category._id))
  },

  updateCategory: (_, { id, name, description }) => {
    return Category.findByIdAndUpdate(id, { name, description }, { new: true })
      .then(async category => await Category.findById(category._id))
  },

  deleteCategory: async (_, { id }) => await Category.findByIdAndRemove(id).exec() !== null,
}