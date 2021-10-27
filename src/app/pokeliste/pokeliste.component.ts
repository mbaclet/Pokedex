import { Component, OnInit } from '@angular/core';
import {PokedexApiService} from "../../services/pokedex-api.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-pokeliste',
  templateUrl: './pokeliste.component.html',
  styleUrls: ['./pokeliste.component.scss']
})
export class PokelisteComponent implements OnInit {

  public pokeTab:Array<Pokemon> = [];

  constructor(
    private pokeListeService: PokedexApiService
  ) {

  }

  public ngOnInit(): void {
    this.pokeListeService.pokeList.subscribe((data: any) => {
      this.pokeTab = data.results;
      console.log(this.pokeTab)
    });
  }
}
