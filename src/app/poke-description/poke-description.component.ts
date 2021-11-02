import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokedexApiService} from "../../services/pokedex-api.service";
import {PokemonDetails} from "../../models/pokemonDetails";
import {PokemonGernd} from "../../models/pokemonGernd";

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {

  public pokemon: PokemonDetails|null = null;
  public pokemonGender: PokemonGernd|null = null;

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokedexApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      console.log(params.id)
      this.pokeApiService.getPokemonDetails(params.id)
        .subscribe((pokemon: PokemonDetails) => {
          this.pokemon = pokemon;
        });
    });
    this.route.params.subscribe((params) =>{
      this.pokeApiService.getPokemonGender(params.id)
        .subscribe((gender:PokemonGernd) =>{
          this.pokemonGender = gender;
        });
    });
  }
}
