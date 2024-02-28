import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComunicarCompHijoComponent } from "../comunicar-comp-hijo/comunicar-comp-hijo.component";

@Component({
    selector: 'app-comunicar-comp',
    standalone: true,
    templateUrl: './comunicar-comp.component.html',
    styleUrl: './comunicar-comp.component.css',
    imports: [FormsModule, CommonModule, ComunicarCompHijoComponent]
})
export class ComunicarCompComponent {

  titulo = "Listado de empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[] = [
    new Empleado("Juan", "Diaz", "Gerente", 2000),
    new Empleado("Juana", "Riaz", "Limpieza", 3000),
    new Empleado("Duan", "Alaz", "Secretaria", 4000),
    new Empleado("Ruan", "Soaz", "Socio", 5000),
  ]
  
  AgregarEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }

}
