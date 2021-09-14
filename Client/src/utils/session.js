const USER_TOKEN = "user@token";

const session = {
  setToken(data) {
    sessionStorage.setItem(USER_TOKEN, data);
  },
  getToken() {
    sessionStorage.getItem(USER_TOKEN);
  },
  clear() {
    sessionStorage.clear();
  },
};

export default session;
