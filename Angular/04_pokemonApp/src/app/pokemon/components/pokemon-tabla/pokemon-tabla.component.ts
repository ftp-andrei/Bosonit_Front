import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-tabla',
  templateUrl: './pokemon-tabla.component.html',
})
export class PokemonTablaComponent {
  @Input() public pokemones: Pokemon[] = [];
}
