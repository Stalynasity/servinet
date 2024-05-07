import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngresoClienteComponent } from '../page/caja/ingreso-cliente/ingreso-cliente.component';
import { validarTokenGuard } from '../guards/validar-token.guard';
import { GestorComponent } from '../page/gestor/gestor.component';
import { PageCajaComponent } from '../page/caja/page-caja/page-caja.component';
import { NewUsuaComponent } from '../page/new-usua/new-usua.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        {path:'clientenew', component: IngresoClienteComponent, canActivate: [validarTokenGuard] },
        {path:'usuanew', component: NewUsuaComponent, canActivate: [validarTokenGuard] },
        {path: 'gestor', component: GestorComponent, canActivate: [validarTokenGuard]},
        {path: 'cajero', component: PageCajaComponent, canActivate: [validarTokenGuard]},
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
