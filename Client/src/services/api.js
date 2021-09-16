import axios from "axios";
import session from "../utils/session";
import { toast } from "react-toastify";
//import { LOGIN_OR_REGISTER_PAGE } from "../routes/routes";

export const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3333";

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  if (config?.url !== "/login") {
    config.headers = {
      Authorization: session.getToken(),
    };
  }
  config.crossdomain = true;
  return config;
});

api.interceptors.response.use(
  (res) => Promise.resolve(res),
  (error) => {
    const data = error?.response?.data;
    const status = error?.response?.status;

    if (status >= 400 && status < 500) {
      toast.warning(`${data?.message} [Código: ${status}]`, {
        style: { color: "#000" },
      });
    }

    if (status === 403) session.clear();

    if (status >= 500) toast.error(data?.message);

    return Promise.reject(error);
  }
);

export default api;
