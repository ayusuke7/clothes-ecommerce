import axios from "axios";
import { ENDPOINTS } from "../commons/endpoints";

const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
});

export default api;
