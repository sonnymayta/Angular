import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comunicar-comp-padre',
  standalone: true,
  imports: [],
  templateUrl: './comunicar-comp-padre.component.html',
  styleUrl: './comunicar-comp-padre.component.css'
})
export class ComunicarCompPadreComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }

}
