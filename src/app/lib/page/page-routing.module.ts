import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Inicio/inicio.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AccessModule } from '../auth/access/access.module';
import { NotfoundComponent } from '../shared/notfound/notfound.component';

const routes: Routes = [

  {   path: "planes", component: InicioComponent  },
  {   path: "consultas", component: ConsultasComponent },
  {   path: "Acces", component: AccessModule },
  {   path: '**', redirectTo: '/notfound' },

];

// imports: [RouterModule.forChild([
//   { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
//   { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
//   { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
//   { path: '**', redirectTo: '/notfound' }
// ])],

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
