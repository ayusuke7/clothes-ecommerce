import api from "./api";

export default class UserServices {
  postUserLogin(payload) {
    return api.post("/login", payload);
  }
}
