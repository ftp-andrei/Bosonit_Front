import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
    `
      .container {
        height: 50px;
        display: flex;
      }
      .btn {
        min-width: 120px;
        background-color: #0275d8;
        color: white;
        border-radius: 0px;
      }

      form input {
        height: 100%;
        border-color: #0275d8;
      }

      .selected {
        background-color: #5cb85c;
      }
    `,
  ],
})
export class BuscadorComponent {
  pais: string = 'Spain';
  name: string = '';
  universidades: any;

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(private buscadorService: BuscadorService) {}

  cambiarPais(pais: string) {
    this.pais = pais;
  }

  buscar() {
    this.buscadorService
      .buscarUniversidades(this.pais, this.name)
      .subscribe((resp) => {
        this.universidades = resp;
      });
  }

  buscarAll(pais: string) {
    this.buscadorService
      .buscarUniversidades(pais, '')
      .subscribe((resp) => (this.universidades = resp));
  }
}
