import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pokemon, Region } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private apiUrlRegion: string = 'https://pokeapi.co/api/v2/region';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'id,name,sprites,types,weight,height,base_experience,abilities'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPokemon(termino: string): Observable<Pokemon[]> {
    const url = `${this.apiUrl}/${termino}`;
    return this.http
      .get<Pokemon[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }

  getPokemonPorId(id: string): Observable<Pokemon[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pokemon[]>(url);
  }

  buscarRegion(region: string): Observable<Region[]> {
    const url = `${this.apiUrlRegion}/${region}`;
    return this.http.get<Region[]>(url);
  }
}
