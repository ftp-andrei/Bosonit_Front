import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuscadorService {
  private _baseUrl = 'http://universities.hipolabs.com/search?';

  constructor(private http: HttpClient) {}

  buscarUniversidades(pais: string, nombre: string) {
    return this.http.get(`${this._baseUrl}name=${nombre}&country=${pais}`);
  }
}
