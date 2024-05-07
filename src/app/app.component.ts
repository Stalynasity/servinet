import { Component } from '@angular/core';
import { PropertiesItem } from './lib/interface/menuitem.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servinet';

  opciones: PropertiesItem[] = [
    {
      idopcion: 1,
      idrol: 1,
      ruta: "/auth/usuanew",
      opcion: "Nuevo usuario",
    },
    {
      idopcion: 2,
      idrol: 1,
      ruta: "/auth/cajas",
      opcion: "Caja",
    },
    // {
    //   idopcion: 3,
    //   idrol: 1,
    //   ruta: "/docs",
    //   opcion: "Docs",
    // }
  ];
}
