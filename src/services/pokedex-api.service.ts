import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {
  private pokeListInternal: Array<Pokemon>|null = null;


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public get pokeList(): Observable<Array<Pokemon>> {
    if (this.pokeListInternal === null) {
      return this.httpClient.get<Array<Pokemon>>('https://pokeapi.co/api/v2/pokemon/');
    }

    return from([]);
  }

  public createTodo(todo: Pokemon): void {
      this.pokeList.subscribe((data) => {
        console.log(data);
      });
  }
}
