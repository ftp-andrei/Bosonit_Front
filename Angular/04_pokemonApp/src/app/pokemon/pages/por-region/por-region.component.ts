import { Component } from '@angular/core';

import { Region } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'kanto',
    'johto',
    'hoenn',
    'sinnoh',
    'unova',
    'kalos',
    'alola',
    'galar',
    'hisui',
    'paldea',
  ];
  regionActiva: string = '';
  reg: Region[] = [];
  constructor(private pokemonService: PokemonService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.reg = [];
    this.pokemonService.buscarRegion(region).subscribe((regiones) => {
      this.reg = Array.isArray(regiones) ? regiones : [regiones];
    });
  }
}
