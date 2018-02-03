import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ProductService } from '../product/product.service';

import { Cart } from '../models/cart';
import { ICartItem } from '../models/cart-item';
import { IProduct } from '../models/product';

const cartKey = 'qiqocart';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    public pageTitle = 'Your Shopping Cart';
    public cart: Cart;

    constructor(private _productService: ProductService,
        private _cartService: CartService) {
    }

    ngOnInit() {
        this.loadCart();
    }

    loadCart() {
        this.cart = this._cartService.getCart(cartKey);
    }

    saveCart() {
        if (this._cartService.saveCart(cartKey, this.cart)) {
            console.log('Cart saved sucessfully!');
        }
    }

    addItem(product: IProduct, quantity: number, price: number) {
        this.cart = this._cartService.addCartItem(cartKey, product, quantity, price);
        console.log('Item added to cart sucessfully!');
    }

    removeItem(item: ICartItem) {
        if (this._cartService.removeCartItem(cartKey, item.product)) {
            console.log('Item removed sucessfully!');
            this.loadCart();
        }
    }

    empty() {
        if (this._cartService.deleteCart(cartKey)) {
            console.log('Cart deleted sucessfully!');
            this.loadCart();
        }
    }

    isEmpty() {
        return (this.cart.cartItems!.length > 0 ? false : true);
    }

    testAddItem(id: number) {
        this.cart.cartItems = [];
        this.saveCart();
        if (this.cart.cartItems.length === 0) {
            console.log('Attempting to get product');
            this._productService.getProduct(id)
                .subscribe(
                product => {
                    this.addItem(product, 1, 30);
                });
        }
    }
}
