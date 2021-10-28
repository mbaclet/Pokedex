import { Component, OnInit } from '@angular/core';
import {PokedexApiService} from "../../services/pokedex-api.service";
import {PokemonLite} from "../../models/pokemonLite";
import {PokemonList} from "../../models/pokemonList";

@Component({
  selector: 'app-pokeliste',
  templateUrl: './pokeliste.component.html',
  styleUrls: ['./pokeliste.component.scss']
})
export class PokelisteComponent implements OnInit {

  public pokeList: Array<PokemonLite> = [];

  constructor(
    private pokeapiService:PokedexApiService
  ) { }

  ngOnInit(): void {
    this.pokeapiService.pokemonList.subscribe((data:PokemonList) =>{
      this.pokeList = data.results;
    })
  }

  public getId(pokemon: PokemonLite): string {
    const result = pokemon.url.match(/^https:\/\/pokeapi\.co\/api\/v2\/pokemon\/([0-9]+)\/?$/);
    if(result){
      return result[1];
    }
    return'';
  }
}
