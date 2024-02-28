import { Component, Input } from '@angular/core';
import { Empleado } from '../comunicar-comp/empleado.model';

@Component({
  selector: 'app-comunicar-comp-hijo',
  standalone: true,
  imports: [],
  templateUrl: './comunicar-comp-hijo.component.html',
  styleUrl: './comunicar-comp-hijo.component.css'
})
export class ComunicarCompHijoComponent {

  @Input() empleadoLista: Empleado = new Empleado();
  @Input() indice: number = 0;

  
}
