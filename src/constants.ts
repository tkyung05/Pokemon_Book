export const STATUS_200 = 200;
export const STATUS_404 = 404;

export const API_BASE_URL = "https://pokeapi.co/api/v2/";
export const PUBLIC_URL = "https://tkyung05.github.io/Pokemon_Book/";

export const missingPoke = {
  id: 9999,
  name: "missingNo",
  height: 9999,
  weight: 9999,

  sprites: {
    front_default: PUBLIC_URL + "img/missing_no.png",
    back_default: PUBLIC_URL + "img/missing_no.png",
  },
  types: [{ slot: 0, type: { name: "mystery", url: "" } }],
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
