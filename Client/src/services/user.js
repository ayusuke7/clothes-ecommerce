import api from "./api";

export default class UserServices {
  postUserLogin(payload) {
    return api.post("/login", payload);
  }
  postUserRegister(payload) {
    return api.post("/register", payload);
  }

  getUserInfo(id) {
    return api.get("/users/".concat(id));
  }
}
