import api from "./api";

export default class CategoryServices {
  getAllCategorys() {
    return api.get("/categorys");
  }
}
