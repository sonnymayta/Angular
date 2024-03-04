import { Component } from '@angular/core';
import { ComunicarCompComponent } from "../../comunicar-comp/comunicar-comp.component";

@Component({
    selector: 'app-proyectos',
    standalone: true,
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css',
    imports: [ComunicarCompComponent]
})
export class ProyectosComponent {

}
