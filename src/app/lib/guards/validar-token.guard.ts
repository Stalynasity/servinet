import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const validarTokenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('token');
  if (localData != null) {
    return true;
  } else {
    router.navigateByUrl('/auth/login')
    console.log('logeate primero')
    return false;
  }
};