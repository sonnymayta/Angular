// Podemos crear servicios utilizanco el cli ng g s servico-empleado
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  // Se crea un método para probar el servicio
  MuestraMensaje(mensaje: string) {
    alert(mensaje);
  }
}
