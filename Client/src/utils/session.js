const USER_TOKEN = "mrm@user";

const session = {
  setUser(data) {
    sessionStorage.setItem(USER_TOKEN, JSON.stringify(data));
  },
  getUser() {
    const data = sessionStorage.getItem(USER_TOKEN);
    return data ? JSON.parse(data)?.user : null;
  },
  getToken() {
    const data = sessionStorage.getItem(USER_TOKEN);
    return data ? JSON.parse(data)?.token : null;
  },
  clear() {
    sessionStorage.clear();
  },
};

export default session;
