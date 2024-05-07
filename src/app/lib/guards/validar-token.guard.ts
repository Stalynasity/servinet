import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const validarTokenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice = inject(AuthService);

  if (authservice.isLogginIn()) {
    return true;
  } else {
    router.navigateByUrl('/auth/login')
    console.log('logeate primero')
    return false;
  }
};
