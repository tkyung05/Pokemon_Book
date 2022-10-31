import { selector } from "recoil";
import { pokeInfoAtom } from "./atoms";

export const pokeInfoSelector = selector({
  key: "pokeInfoSelector",
  get: ({ get }) => ({ ...get(pokeInfoAtom) }),
  set: ({ set }, newPokeInfo) => set(pokeInfoAtom, newPokeInfo),
});
