import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrl: './gestor.component.css'
})
export class GestorComponent {

  datoForm = [
    {descripcion: 'Ingresar un nuevo usuario', url:'usuanew', btn:'Agregar'},
    {descripcion: 'Asignar cajeros a cajas', url:'', btn:'Ordenar'},
  ]

}
