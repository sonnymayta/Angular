import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-c',
  standalone: true,
  imports: [],
  templateUrl: './empleado-c.component.html',
  styleUrl: './empleado-c.component.css'
})
export class EmpleadoCComponent {
  HabilitaTexto: boolean = true;
  UsuarioRegistrado: boolean = true;

  getRegistroUsuario() {
    this.UsuarioRegistrado = true;
  }
}
