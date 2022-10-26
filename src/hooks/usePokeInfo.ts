import { useSetRecoilState } from "recoil";
import { pokeInfoAtom } from "../atom";
import { IPokeInfo } from "../interfaces";

export const usePokeInfo = () => {
  const setter = useSetRecoilState(pokeInfoAtom);

  const setPokeInfo = (newPokeInfo: IPokeInfo): void => {
    setter(newPokeInfo);
    return;
  };

  return { setPokeInfo };
};
