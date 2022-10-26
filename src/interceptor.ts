import axios, { AxiosRequestConfig } from "axios";
import { STATUS_200, STATUS_404 } from "./constants";
import { IPokeInfo } from "./interfaces";

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
    const config = err.config;

    try {
      if (err.response && err.response.status === STATUS_404) {
        const missingPoke = {
          id: 9999,
          sprites: {
            front_default: "img/missing_no.png",
          },
          name: "missing no",
          stats: [
            {
              base_stat: 9999,
              effort: 0,
              stat: {
                name: "hp",
                url: "",
              },
            },
            {
              base_stat: 9999,
              effort: 0,
              stat: {
                name: "attack",
                url: "",
              },
            },
            {
              base_stat: 9999,
              effort: 0,
              stat: {
                name: "defense",
                url: "",
              },
            },
          ],
        };

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
