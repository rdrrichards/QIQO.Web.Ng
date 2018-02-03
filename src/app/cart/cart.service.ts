import { Injectable } from '@angular/core';

import { ICart, Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { IProduct } from '../models/product';

@Injectable()
export class CartService {

  constructor() { }

  getCart(key: string): ICart {
    try {
      if (localStorage.getItem(key)) {
        console.log('Found existing cart!');
        return JSON.parse(localStorage.getItem(key)!);
      } else {
        console.log('Creating new cart!');
        const cart: Cart = {
          id: key,
          account: undefined,
          orderDeliverByDate: undefined,
          cartItems: []
        };
        this.saveCart(key, cart);
        return cart;
      }
    } catch (err) {
      console.log('Something went wrong!');
      console.log(err);
      return err;
    }
  }

  addCart(key: string): ICart {
    console.log('Creating new cart!');
    const cart: Cart = {
      id: key,
      account: undefined,
      orderDeliverByDate: undefined,
      cartItems: []
    };
    this.saveCart(key, cart);
    return cart;
  }

  addCartItem(key: string, product: IProduct, quantity: number, price: number): ICart {
    console.log('Creating new cart item!');
    const cart = this.getCart(key);
    const line = cart.cartItems!.find(item => item.product.productKey === product.productKey);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      cart.cartItems!.push(new CartItem(product, quantity, price));
    }
    this.saveCart(key, cart);
    return cart;
  }

  removeCartItem(key: string, product: IProduct): ICart {
    console.log('Removing cart item!');
    const cart = this.getCart(key);
    const index = cart.cartItems!.findIndex(line => line.product.productKey === product.productKey);
    cart.cartItems!.splice(index, 1);
    this.saveCart(key, cart);
    return cart;
  }

  saveCart(key: string, cart: ICart): boolean {
    if (localStorage != null && JSON != null) {
      if (cart) {
        cart.id = key;
        localStorage.setItem(key, JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem(key)!));
        return true;
      }
    }
    return false;
  }

  deleteCart(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
