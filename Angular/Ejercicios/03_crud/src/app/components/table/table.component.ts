import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Persona } from '../../interfaces/persona-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  personas: Persona[] = [
    {
      nombre: 'Andrei',
      password: '123',
      password2: '123',
      email: 'andrei@test.com',
      promociones: false,
      pais: 'Spain',
      ciudad: 'Lardero',
    },
  ];

  @Output() eventEmitter = new EventEmitter<Persona>();
  @Input() persona: Persona = {
    nombre: '',
    password: '',
    password2: '',
    email: '',
    promociones: false,
    pais: '',
    ciudad: '',
  };

  sw: boolean = false;
  numero: number = 0;

  ngOnChanges(): void {
    setTimeout(() => {
      if (this.persona.nombre.trim().length > 0 && this.sw !== true) {
        this.personas.push(this.persona);
      }
      if (this.sw) {
        const numero: number = this.editar(this.numero);
        this.personas[numero] = this.persona;
        this.sw = false;
      }
    }, 0);
  }

  editar(i: number): number {
    this.eventEmitter.emit(this.personas[i]);
    this.sw = true;
    this.numero = i;
    return this.numero;
  }

  borrar(i: number) {
    this.personas.splice(i, 1);
  }
}
