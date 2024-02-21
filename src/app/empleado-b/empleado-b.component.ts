import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-b',
  standalone: true,
  imports: [],
  templateUrl: './empleado-b.component.html',
  styleUrl: './empleado-b.component.css'
})
export class EmpleadoBComponent {
  nombre: string = 'Sonny';  
  // apelldio: string = 'Mayta';

  IntroduceEmpresa(value: string) {
  }
}
