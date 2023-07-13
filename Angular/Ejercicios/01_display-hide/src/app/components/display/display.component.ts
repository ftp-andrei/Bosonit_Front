import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  textoBoton = 'Ocultar';
  mostrar = true;

  constructor() {}

  displayHide() {
    this.mostrar = !this.mostrar;

    if (!this.mostrar) {
      this.textoBoton = 'Mostrar';
    } else {
      this.textoBoton = 'Ocultar';
    }
  }
}
