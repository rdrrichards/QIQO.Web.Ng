import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateGuard  {
  deniedMessage = 'Unauthorized access denied';

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log('can activate auth gaurd called');
    if (this.authService.isUserAuthenticated()) {
      console.log('can activate auth gaurd called: true');
      return true;
    }
    console.log('can activate auth gaurd called: false');
    this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
    // this.toastService.activate(this.deniedMessage);
    return false;
  }
}
