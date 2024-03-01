import { Routes } from '@angular/router';
import { InicioComponent } from './web-componente/inicio/inicio.component';
import { ProyectosComponent } from './web-componente/proyectos/proyectos.component';
import { QuienesComponent } from './web-componente/quienes/quienes.component';
import { ContactoComponent } from './web-componente/contacto/contacto.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quienes-somos', component: QuienesComponent },
  { path: 'contacto', component: ContactoComponent },
];
