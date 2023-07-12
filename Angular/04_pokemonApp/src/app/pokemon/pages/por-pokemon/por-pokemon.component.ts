import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-por-pokemon',
  templateUrl: './por-pokemon.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPokemonComponent {
  termino: string = '';
  hayError: boolean = false;
  pokemones: Pokemon[] = [];

  pokemonesSugeridos: Pokemon[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino.trim();

    if (this.termino !== '') {
      this.pokemonService
        .buscarPokemon(termino)
        .pipe(
          map((pokemones) => Object.values(pokemones)),
          catchError(() => {
            this.hayError = true;
            return of([]);
          })
        )
        .subscribe((pokemones) => {
          this.pokemones = pokemones;
        });
    }
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino.trim();
    this.mostrarSugerencias = true;

    if (this.termino !== '') {
      this.pokemonService
        .buscarPokemon(termino)
        .pipe(
          map((pokemones) => pokemones.splice(0, 5)),
          catchError(() => {
            return of([]);
          })
        )
        .subscribe((pokemones) => {
          this.pokemonesSugeridos = pokemones;
        });
    } else {
      this.pokemonesSugeridos = [];
    }
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
