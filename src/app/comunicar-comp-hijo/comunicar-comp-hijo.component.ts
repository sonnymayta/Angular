import { Component, Input } from '@angular/core';
import { Empleado } from '../comunicar-comp/empleado.model';
import { ComunicarCompPadreComponent } from "../comunicar-comp-padre/comunicar-comp-padre.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-comunicar-comp-hijo',
    standalone: true,
    templateUrl: './comunicar-comp-hijo.component.html',
    styleUrl: './comunicar-comp-hijo.component.css',
    imports: [ComunicarCompPadreComponent, CommonModule]
})
export class ComunicarCompHijoComponent {

  // Establecemos la comunicación inicializando las variables del padre
  @Input() empleadoLista: Empleado = new Empleado();
  // @Input() empleadoLista: Empleado | undefined;
  @Input() indice: number = 0;
  
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    // this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
