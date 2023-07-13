import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  private messageAlHijo = new Subject<string>();
  private messageAlPadre = new Subject<string>();

  mensajeAlHijoObservable = this.messageAlHijo.asObservable();
  mensajeAlPadreObservable = this.messageAlPadre.asObservable();

  comunicacionPadreHijo(mensaje: string) {
    this.messageAlPadre.next(mensaje);
  }

  mensajeObservableAlPadre() {
    return this.messageAlHijo.next('message: CHILD USING SUBJECT');
  }

  comunicacionHijoPadre(mensaje: string) {
    this.messageAlHijo.next(mensaje);
  }

  mensajeObservableAlHijo() {
    return this.messageAlPadre.next('message: PARENT USING SUBJECT');
  }
}
