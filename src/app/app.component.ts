import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoBComponent } from "./empleado-b/empleado-b.component";
import { EmpleadoCComponent } from "./empleado-c/empleado-c.component";
import { EmpleadoDComponent } from "./empleado-d/empleado-d.component";
import { EmpleadoEComponent } from "./empleado-e/empleado-e.component";
import { DirectivasComponent } from "./directivas/directivas.component";
import { Directivas2Component } from "./directivas2/directivas2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, EmpleadosComponent, EmpleadoBComponent, EmpleadoCComponent, EmpleadoDComponent, EmpleadoEComponent, DirectivasComponent, Directivas2Component]
})
export class AppComponent {
  title = 'Conceptos';
}
