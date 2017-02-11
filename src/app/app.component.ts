import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationName = 'The App Works!';

  getUserName()
  {
    return 'Richard Richards';
  }

  isUserLoggedIn(){
    return true;
  }

  logout(){}
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
