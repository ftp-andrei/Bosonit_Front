import { Component } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/comunicacion.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  message: string = 'message:';
  mensajeServicioAlHijo: string = 'message: PARENT USING SERVICE';
  newMessage: string = '';
  switch: boolean = true;

  constructor(private mensajeService: ComunicacionService) {
    this.mensajeService.mensajeAlHijoObservable.subscribe(
      (mensaje) => (this.message = mensaje)
    );
  }

  service() {
    this.mensajeService.comunicacionPadreHijo(this.mensajeServicioAlHijo);
  }

  property() {
    this.newMessage = 'message: PARENT USING INPUT PROPERTY';
    this.switch = true;
    console.log('uso padre');
  }

  observable() {
    this.mensajeService.mensajeObservableAlHijo();
  }

  botonSeleccionado(messageChild: string) {
    this.message = messageChild;
  }
}
