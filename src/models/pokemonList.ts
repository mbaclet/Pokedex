import {PokemonLite} from "./pokemonLite";

export interface PokemonList{
  count:number;
  next:string;
  previous:string;
  results:Array<PokemonLite>;
}
