import { Component } from '@angular/core';

@Component({
  selector: 'app-page-caja',
  templateUrl: './page-caja.component.html',
  styleUrl: './page-caja.component.css'
})
export class PageCajaComponent {

  datoForm = [
    {descripcion: 'Ingresar un nuevo cliente y contrato', url:'clientenew'},
    {descripcion: 'Cambio del servicio contratado', url:'clientenew'},
    {descripcion: 'Cambio de forma de pago', url:'clientenew'},
    {descripcion: ' Cancelación de contrato del servicio', url:'clientenew'},
    {descripcion: ' Ver pagos', url:'clientenew'}
  ]



}
