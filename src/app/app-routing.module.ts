import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokelisteComponent} from "./pokeliste/pokeliste.component";
import {PokeDescriptionComponent} from "./poke-description/poke-description.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  {path: '', component: PokelisteComponent},
  {path: 'description/:id', component: PokeDescriptionComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
