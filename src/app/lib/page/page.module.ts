import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { InicioComponent } from './Inicio/inicio.component';
import { IngresoClienteComponent } from './caja/ingreso-cliente/ingreso-cliente.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent,
    IngresoClienteComponent,
    ConsultasComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    IngresoClienteComponent,
  ]
})
export class PageModule { }
