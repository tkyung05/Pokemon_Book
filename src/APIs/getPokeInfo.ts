import APIController from "../interceptor";

export const getPokeInfo = async (pokeName: string) => {
  return await APIController.get(`pokemon/${pokeName.toLowerCase()}`);
};
