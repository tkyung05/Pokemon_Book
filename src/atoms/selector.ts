import { selector } from "recoil";
import { pokeInfoAtom } from "./atom";

export const pokeInfoSelector = selector({
  key: "pokeInfoSelector",
  get: ({ get }) => ({ ...get(pokeInfoAtom) }),
  set: ({ set }, newPokeInfo) => set(pokeInfoAtom, newPokeInfo),
});
