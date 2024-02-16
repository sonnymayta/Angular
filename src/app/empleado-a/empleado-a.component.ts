import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-a',
  standalone: true,
  imports: [],
  templateUrl: './empleado-a.component.html',
  styleUrl: './empleado-a.component.css'
})
export class EmpleadoAComponent {
  // Encapsulamos el nombre y apellido
  private nombre: string = 'Sonny';
  private apellido: string = 'Mayta';
  edad: number = 18;
  empresa: string = 'Google';

  GetNombre() {
    return this.nombre;
  }

  GetApellido() {
    return this.apellido;
  }
}
