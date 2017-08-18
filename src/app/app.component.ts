import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName = 'The App Works!';
  loading = true;

  constructor(public authService: AuthService,
    private router: Router) {
      router.events.subscribe((routerEvent: Event) => {
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
      .subscribe(res => {
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


/*

Account Module
  Account List (done)
  Account Detail (done)
  Account Orders List (done)
  Account Order Details (done)
  Account Service (done)
  Account Routes (done)

Cart Module
  Cart Details (done)
  Cart Service (done)
  Cart Routes (done)

Home/Welcome Module
  Home Component (done)
  Home Routes (done)

Admin Module
  Account List
  Account Detail/Edit
  Orders List
  Order Detail/Edit
  Products List
  Product Detail/Edit
  Admin Routes

Product Module
  Product List (done)
  Product Details
  Product Service (done)
  Product Routes (done)

Shared Module
Core Module

Models
  Account (done)
  Order (done)
  Product (done)
  Address (done)
  Cart (done)
  Entity Attribute (done)
  Login (done)

*/
