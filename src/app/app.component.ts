import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName = 'The App Works!';
  constructor(public authService: AuthService,
    private router: Router) {
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
}


/*

Account Module
  Account List
  Account Detail
  Account Orders List
  Account Order Details
  Account Service
  Account Routes

Cart Module
  Cart Details
  Cart Service
  Cart Routes

Home/Welcome Module
  Home Component
  Home Routes

Admin Module
  Account List
  Account Detail/Edit
  Orders List
  Order Detail/Edit
  Products List
  Product Detail/Edit
  Admin Routes

Product Module
  Product List
  Product Details
  Product Service
  Product Routes

Shared Module
Core Module

Models
  Account
  Order
  Product
  Address
  Cart
  Entity Attribute
  Login

*/
