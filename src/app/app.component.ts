import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = true;

  constructor(public authService: AuthService,
    private router: Router) {
      this.router.events.subscribe((routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
    });
  }

  isUserLoggedIn(): boolean {
    return this.authService.isUserAuthenticated();
  }

  getUserName(): string {
    if (this.isUserLoggedIn()) {
      const _user = this.authService.getLoggedInUser();
      return _user.userName;
    } else {
      return '';
    }
  }

  logout(): void {
    this.authService.logout()
      .subscribe(() => {
        localStorage.removeItem('user');
      },
      error => console.error('Error: ' + error),
      () => { });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
        this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.loading = false;
    }
  }
}
