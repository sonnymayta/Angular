import { Injectable } from '@angular/core';
import { Empleado } from '../comunicar-comp/empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private mensajeServicio: ServicioEmpleadoService) { }

  empleados: Empleado[] = [
    new Empleado("Juan", "Diaz", "Gerente", 2000),
    new Empleado("Juana", "Riaz", "Limpieza", 3000),
    new Empleado("Duan", "Alaz", "Secretaria", 4000),
    new Empleado("Ruan", "Soaz", "Socio", 5000),
  ]

  AgregarEmpleadoServicio(empleado: Empleado) {
    this.mensajeServicio.MuestraMensaje("Registro de un nuevo usuario: " + empleado.nombre + empleado.apellido)
    this.empleados.push(empleado);
  }
}
