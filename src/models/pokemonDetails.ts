export interface PokemonDetails{
  name: string;
  order: number;
  id: number;
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string;
      }
    }
  }
}
