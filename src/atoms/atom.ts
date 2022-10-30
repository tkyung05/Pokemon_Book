import { atom } from "recoil";
import { IPokeInfo } from "../interfaces";

export const pokeInfoAtom = atom<IPokeInfo>({
  key: "pokeInfoAtom",
  default: {
    id: 0,
    name: "",

    sprite_front: "",
    sprite_back: "",

    weight: 0,
    height: 0,

    types: [
      {
        slot: 0,
        type: {
          name: "",
          url: "",
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: "not found",
          url: "",
        },
      },
    ],
  },
});
