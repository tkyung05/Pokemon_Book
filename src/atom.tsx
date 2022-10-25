import { atom } from "recoil";

export const previewPokeInfo = atom({
  key: "previewPokeInfo",
  default: {
    id: 0,
    sprite: "",
    name: "",
    types: [""],
    stats: [{}],
  },
});
