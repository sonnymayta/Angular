import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  mensaje: string = "";
  registrado: boolean = false;
  nombre: string = "";
  apellido: string = "";

  RegistrarUsuario() {
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito."
  }
}
