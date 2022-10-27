export interface IPokeInfo {
  id: number;
  name: string;

  sprite_front: string;
  sprite_back: string;

  weight: number;
  height: number;

  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}
