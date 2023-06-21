import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-tabla',
  templateUrl: './pokemon-tabla.component.html',
})
export class PokemonTablaComponent implements OnInit {
  @Input() pokemones: Pokemon[] = [];

  constructor() {}

  ngOnInit(): void {}
}
