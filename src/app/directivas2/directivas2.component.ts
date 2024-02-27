import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directivas2.component.html',
  styleUrl: './directivas2.component.css'
})
export class Directivas2Component {

  titulo: string = "Registro de Usuario";
  mensaje: string = "";
  registrado: boolean = false;
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";

  RegistrarUsuario() {
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito."
  }
}
