import axios, { AxiosRequestConfig } from "axios";
import { STATUS_404 } from "./constants";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const basicConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

const APIController = axios.create(basicConfig);

APIController.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  }
);

APIController.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    try {
      if (err.response && err.response.status === STATUS_404) {
        console.log("예외 처리");
        return;
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default APIController;
