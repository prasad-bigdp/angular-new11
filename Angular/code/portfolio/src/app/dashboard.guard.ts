import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const x = localStorage.getItem('login')
  if (x)
  {
    return true;
  }
  else {
    return false
  }
};
