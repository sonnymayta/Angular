import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-comunicar-comp-padre',
  standalone: true,
  imports: [],
  templateUrl: './comunicar-comp-padre.component.html',
  styleUrl: './comunicar-comp-padre.component.css'
})
export class ComunicarCompPadreComponent {

  constructor(private servicioEmpleadoService: ServicioEmpleadoService) {
    
  }

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
    this.servicioEmpleadoService.MuestraMensaje("Registro de caracteristica: " + value)
  }

}
