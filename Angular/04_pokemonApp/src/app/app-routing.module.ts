import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorPokemonComponent } from './pokemon/pages/por-pokemon/por-pokemon.component';
import { PorRegionComponent } from './pokemon/pages/por-region/por-region.component';
import { VerPokemonComponent } from './pokemon/pages/ver-pokemon/ver-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PorPokemonComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'pokemon/:id',
    component: VerPokemonComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
