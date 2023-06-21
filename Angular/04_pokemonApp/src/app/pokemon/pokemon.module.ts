import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPokemonComponent } from './pages/por-pokemon/por-pokemon.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPokemonComponent } from './pages/ver-pokemon/ver-pokemon.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonTablaComponent } from './components/pokemon-tabla/pokemon-tabla.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';

@NgModule({
  declarations: [
    PorPokemonComponent,
    PorRegionComponent,
    VerPokemonComponent,
    PokemonTablaComponent,
    PokemonInputComponent,
  ],
  exports: [PorPokemonComponent, PorRegionComponent, VerPokemonComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PokemonModule {}
