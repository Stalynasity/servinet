import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { InicioComponent } from './Inicio/inicio.component';
import { IngresoClienteComponent } from './caja/ingreso-cliente/ingreso-cliente.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { GestorComponent } from './gestor/gestor.component';
import { PageCajaComponent } from './caja/page-caja/page-caja.component';


@NgModule({
  declarations: [
    InicioComponent,
    IngresoClienteComponent,
    ConsultasComponent,
    GestorComponent,
    PageCajaComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,

  ],
  exports: [
    InicioComponent,
    IngresoClienteComponent,
  ]
})
export class PageModule { }
