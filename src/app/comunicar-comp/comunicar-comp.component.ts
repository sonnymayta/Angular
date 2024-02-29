import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComunicarCompHijoComponent } from "../comunicar-comp-hijo/comunicar-comp-hijo.component";
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadoService } from '../services/empleado.service';

@Component({
    selector: 'app-comunicar-comp',
    standalone: true,
    templateUrl: './comunicar-comp.component.html',
    styleUrl: './comunicar-comp.component.css',
    imports: [FormsModule, CommonModule, ComunicarCompHijoComponent]
})
export class ComunicarCompComponent {

  constructor(private miServicio: ServicioEmpleadoService, private empleadoServicio: EmpleadoService) {

  }

  titulo = "Listado de empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  // empleados: Empleado[] = [
  //   new Empleado("Juan", "Diaz", "Gerente", 2000),
  //   new Empleado("Juana", "Riaz", "Limpieza", 3000),
  //   new Empleado("Duan", "Alaz", "Secretaria", 4000),
  //   new Empleado("Ruan", "Soaz", "Socio", 5000),
  // ]

  empleados: Empleado[] = this.empleadoServicio.empleados;

 
  
  AgregarEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.MuestraMensaje("Registro: " + miEmpleado.nombre);
    // this.empleados.push(miEmpleado);
    this.empleadoServicio.AgregarEmpleadoServicio(miEmpleado);

  }  
}
