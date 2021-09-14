import api from "./api";

export default class ProductServices {
  getAllProducts() {
    return api.get("/products");
  }

  getInfoProduct(id) {
    return api.get(`/products/${id}`);
  }
}
