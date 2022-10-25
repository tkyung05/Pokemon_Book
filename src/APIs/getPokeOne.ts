import APIController from "../interceptor";

export const getPokeOne = async (pokeName: string) => {
  return await APIController.get(`pokemon/${pokeName}`);
};
