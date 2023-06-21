import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'andrei';
  nombreUpper: string = 'ANDREI';
  nombreCompleto: string = 'AndrEi MiU';

  fecha: Date = new Date();
}
