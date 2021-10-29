export interface PokemonDetails{
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string; // Where is found the official artwork for the Pokemon.
      },
    },
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}
