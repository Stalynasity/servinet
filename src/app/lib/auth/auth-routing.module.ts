import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngresoClienteComponent } from '../page/caja/ingreso-cliente/ingreso-cliente.component';
import { validarTokenGuard } from '../guards/validar-token.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        {path:'clientenew', component: IngresoClienteComponent, canActivate: [validarTokenGuard] },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
