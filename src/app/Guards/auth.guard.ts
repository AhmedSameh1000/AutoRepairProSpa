import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token == null || token == undefined) {
    router.navigate(['/auth/login']);
    return false;
  } else {
    return true;
  }
};
