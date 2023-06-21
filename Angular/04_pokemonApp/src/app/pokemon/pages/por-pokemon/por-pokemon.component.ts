import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

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
    this.termino = termino;
    if (termino.trim() != '') {
      this.pokemonService.buscarPokemon(termino.trim()).subscribe(
        (pokemones) => {
          const pokemon = Object.values(pokemones);
          this.pokemones = pokemon;
        },
        (err) => {
          this.hayError = true;
          this.pokemones = [];
        }
      );
    }
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.pokemonService.buscarPokemon(termino.trim()).subscribe(
      (pokemones) => (this.pokemonesSugeridos = pokemones.splice(0, 5)),
      (err) => (this.pokemonesSugeridos = [])
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
