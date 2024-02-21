import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-e',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado-e.component.html',
  styleUrl: './empleado-e.component.css'
})
export class EmpleadoEComponent {
  empresa: string = "Google";

  CambiaEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }
}
