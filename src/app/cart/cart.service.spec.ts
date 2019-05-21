import { TestBed, async, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from 'app/models/product';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CartService ]
    });
  });

  it(`should create`, async(inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  })));

  it(`getCart should return undefined`, async(inject([CartService], (service: CartService) => {
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [] };
    expect(service.getCart('test')).toBeDefined(cart);
  })));

  it(`addCart should return undefined`, async(inject([CartService], (service: CartService) => {
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [] };
    expect(service.addCart('test')).toBeDefined(cart);
  })));

  it(`addCartItem should return undefined`, async(inject([CartService], (service: CartService) => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [product] };
    expect(service.addCartItem('test', product, 1, 1)).toBeDefined(cart);
  })));

  it(`removeCartItem should return undefined`, async(inject([CartService], (service: CartService) => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [product] };
    expect(service.removeCartItem('test', product)).toBeDefined(cart);
  })));

  it(`deleteCart should return undefined`, async(inject([CartService], (service: CartService) => {
    expect(service.deleteCart('test')).toBeTruthy();
  })));
});
