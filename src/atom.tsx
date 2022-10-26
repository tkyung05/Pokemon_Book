import { atom } from "recoil";

export const previewPokeInfo = atom({
  key: "previewPokeInfo",
  default: {
    id: 0,
    sprite: "",
    name: "",
    stats: [
      {
        base_stat: 0,
        effort: 0,
        stat: {
          name: "",
          url: "",
        },
      },
    ],
  },
});
