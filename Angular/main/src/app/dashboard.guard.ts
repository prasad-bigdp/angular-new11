import { CanActivateFn } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './environments';

export const dashboardGuard: CanActivateFn = (route, state) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      return true;
    } else {
      // User is signed out
      // ...
      return false;
    }
  });
  return false;
};
