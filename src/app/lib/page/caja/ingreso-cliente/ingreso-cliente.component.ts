import { Component, Output, output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingreso-cliente',
  templateUrl: './ingreso-cliente.component.html',
  styleUrl: './ingreso-cliente.component.css'
})
export class IngresoClienteComponent {




  showClientForm: boolean = true;

  constructor() {}

  Activador(ocultar: boolean){
    this.showClientForm = ocultar;
  }


}
