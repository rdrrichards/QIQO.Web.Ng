import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ICart, Cart } from '../models/cart';
import { ICartItem, CartItem } from '../models/cart-item';
import { IProduct } from '../models/product';

@Injectable()
export class CartService {

    constructor() { }

    getCart(key: string): ICart {
        try {
            if (localStorage.getItem(key)) {
                console.log('Found existing cart!');
                return JSON.parse(localStorage.getItem(key));
            } else {
                console.log('Creating new cart!');
                const cart = {
                    id: key,
                    account: null,
                    orderDeliverByDate: null,
                    cartItems: []
                }
                this.saveCart(key, cart);
                return cart;
            }
        } catch (err) {
            console.log('Something went wrong!');
            console.log(err);
        }
    }

    addCart(key: string): ICart {
        console.log('Creating new cart!');
        const cart = {
            id: key,
            account: null,
            orderDeliverByDate: null,
            cartItems: []
        }
        this.saveCart(key, cart);
        return cart;
    }

    addCartItem(key: string, product: IProduct, quantity: number, price: number): ICart {
        console.log('Creating new cart item!');
        const cart = this.getCart(key);
        let exists = false;

        cart.cartItems.forEach(element => {
            if (element.product.productKey === product.productKey) {
                exists = true;
                console.log(`Product matched: ${element.product.productName} : ${product.productName}`);
                console.log(`Item Updated: ${element}`);
                element.quantity = element.quantity + quantity;
            }
        });

        if (!exists) {
            const item: ICartItem = new CartItem(product, quantity, price);
            cart.cartItems.push(item);
        }
        this.saveCart(key, cart);
        return cart;
    }

    removeCartItem(key: string, product: IProduct): ICart {
        console.log('Removing cart item!');
        const cart = this.getCart(key);
        cart.cartItems.forEach(element => {
            if (element.product.productKey === product.productKey) {
                const index = cart.cartItems.indexOf(element);
                const item = cart.cartItems.splice(index, 1)[0] || {};
                console.log(`Product matched: ${element.product.productName} : ${product.productName}`);
                console.log(`Item Removed: ${item}`);
            }
        });
        this.saveCart(key, cart);
        return cart;
    }

    saveCart(key: string, cart: ICart): boolean {
        if (localStorage != null && JSON != null) {
            if (cart) {
                cart.id = key;
                localStorage.setItem(key, JSON.stringify(cart));
                console.log(JSON.parse(localStorage.getItem(key)));
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
