import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-d',
  standalone: true,
  imports: [],
  templateUrl: './empleado-d.component.html',
  styleUrl: './empleado-d.component.css'
})
export class EmpleadoDComponent {
  EstadoUsuario: boolean = false;
  TextoRegistro: string = "No hay nadie registrado.";

  setUsuarioRegistrado(event: Event){
    // alert("El usuario se acaba de registrar.");
    if ((<HTMLInputElement>event.target).value == "si") {
      this.TextoRegistro = "El ususario se ha registrado.";
    }
    else {
      this.TextoRegistro = "El ususario no se ha registrado.";
    }
    
  }

  // setUsuarioNoRegistrado(){
  //   // alert("El usuario se acaba de registrar.");
  //   this.TextoRegistro = "El ususario no se ha registrado.";
  // }
}
