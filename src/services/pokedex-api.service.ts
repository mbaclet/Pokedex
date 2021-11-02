import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonList} from "../models/pokemonList";
import {PokemonDetails} from "../models/pokemonDetails";
import {PokemonGernd} from "../models/pokemonGernd";

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {
  arrayPokemon:Array<PokemonDetails> = new Array<PokemonDetails>();

  constructor(
    private httpClient: HttpClient,
  ) {}

  public get pokemonList(): Observable<PokemonList>{
    return this.httpClient.get<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  }

  public getPokemonDetails(id: string): Observable<PokemonDetails>{
    return this.httpClient.get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/'+id);
  }

  public getPokemonGender(id:string): Observable<PokemonGernd>{
    return this.httpClient.get<PokemonGernd>('https://pokeapi.co/api/v2/gender/pokemon/'+id);
  }
}
