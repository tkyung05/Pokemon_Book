import { atom } from "recoil";

export const pokeInfoAtom = atom({
  key: "pokeInfoAtom",
  default: {
    id: 0,
    sprite: "",
    name: "",
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
