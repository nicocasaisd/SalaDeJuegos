import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService);
  const router = inject(Router);

  
  if(auth.loggedUser){
    console.log("Usuario logueado. Puede acceder.");
    return true;
  }

  // Testing
  return true;

  console.log("Debe loguearse antes de pasar.");
  router.navigate(['/login']);
  return false;
};
