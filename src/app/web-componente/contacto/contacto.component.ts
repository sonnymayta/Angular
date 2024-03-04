import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioEmpleadoService } from '../../servicio-empleado.service';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../comunicar-comp/empleado.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private miServicio: ServicioEmpleadoService, private empleadoServicio: EmpleadoService, private router: Router) {
    
  }

  titulo: string = "Registrar empleados"
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  
  
  AgregarEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoServicio.AgregarEmpleadoServicio(miEmpleado);
    this.router.navigate(["proyectos"]);
  }
}
