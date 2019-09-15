import Product from '../../../src/app/models/Product';

export default {
  listProducts: () => Product.find().populate(['category']),

  findProduct: (_, { id }) => Product.findById(id).populate(['category']),
}