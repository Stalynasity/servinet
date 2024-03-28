import { PageModule } from './lib/page/page.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './lib/shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/page/planes'
  },
  { path:'page', loadChildren: () => import('./lib/page/page.module').then(m => m.PageModule) },
  { path: 'auth', loadChildren: () => import('./lib/auth/auth.module').then(m => m.AuthModule) },
  { path: 'registroCliente', loadChildren: () => import('./lib/protected/protected.module').then(m => m.ProtectedModule) },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
