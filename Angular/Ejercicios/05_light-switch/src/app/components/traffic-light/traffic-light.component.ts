import { Component } from '@angular/core';

interface Light {
  name: string;
  class: string;
}

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent {
  estaEncendido: boolean = false;
  color: string = 'red';

  luces: Light[] = [
    {
      name: 'red',
      class: 'luz',
    },
    {
      name: 'yellow',
      class: 'luz',
    },
    {
      name: 'green',
      class: 'luz',
    },
  ];

  recibeColor(e: string) {
    this.color = e;
    this.cambiaColorLuz();
  }

  turnOn() {
    this.estaEncendido = !this.estaEncendido;
    this.estaEncendido ? this.cambiaColorLuz() : this.turnOff();
  }

  cambiaColorLuz() {
    this.luces.forEach((luz) => {
      if (luz.name === this.color) {
        luz.class += ` ${this.color}-on`;
      } else {
        luz.class = 'luz';
      }
    });
  }

  turnOff() {
    this.luces.forEach((luz) => {
      luz.class = 'luz';
    });
  }
}
