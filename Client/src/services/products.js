import api from "./api";

export default class ProductServices {
  getAllProducts() {
    return api.get("/products");
  }
}
