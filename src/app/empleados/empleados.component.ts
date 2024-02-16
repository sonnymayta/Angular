import { Component } from '@angular/core';
import { EmpleadoAComponent } from "../empleado-a/empleado-a.component";

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  imports: [EmpleadoAComponent]
})
export class EmpleadosComponent {
  nombre: string = 'Componente empleados';
}
