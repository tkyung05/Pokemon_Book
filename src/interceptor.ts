import axios, { AxiosRequestConfig } from "axios";
import { missingPoke, STATUS_200, STATUS_404 } from "./constants";

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
  (err) => {
    const config = err.config;

    try {
      if (err.response && err.response.status === STATUS_404) {
        /* 이상한 값 검색하면 (404) 미싱노 데이터 보내주기*/
        config.data = missingPoke;
        config.status = STATUS_200;

        return config;
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);

export default APIController;
