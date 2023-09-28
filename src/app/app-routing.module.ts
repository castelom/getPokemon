import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomPokemonComponent } from './Pages/random-pokemon/random-pokemon.component';

const routes: Routes = [
  {path:'', component: RandomPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
