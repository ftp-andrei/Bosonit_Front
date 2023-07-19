import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  colorSelected: string = 'red';

  @Input() powerOn!: boolean;
  @Output() onColorEmitted: EventEmitter<string> = new EventEmitter();

  sendColor() {
    this.onColorEmitted.emit(this.colorSelected);
  }
}
