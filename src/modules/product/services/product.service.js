import ProductModal from "../models/product.schema.js";

const ProductService = {
  create: (payload) => {
    return new ProductModal(payload).save();
  },
  getAll: (query) => {
    return ProductModal.find(query);
  },
  getOne: (id) => {
    return ProductModal.findOne({ _id: id });
  },
  updateOne: (id, payload) => {
    return ProductModal.findOneAndUpdate({ _id: id } ,  { $set: payload });
  },
};

export default ProductService;
