import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../models/pokemonList";
import {PokemonDetails} from "../models/pokemonDetails";

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {
  arrayPokemon:Array<PokemonDetails> = new Array<PokemonDetails>();

  constructor(
    private httpClient: HttpClient,
  ) {}

  public get pokemonList(): Observable<PokemonList>{
    return this.httpClient.get<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=11&offset=0');
  }

  public getPokemonDetails(id: string): Observable<PokemonDetails>{
    return this.httpClient.get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/'+id);
  }
}
