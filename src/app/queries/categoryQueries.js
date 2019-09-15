import Category from '../../../src/app/models/Category';

export default {
  listCategories: () => Category.find(),

  findCategory: (_, { id }) => Category.findById(id),
}