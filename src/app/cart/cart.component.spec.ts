import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartComponent } from './cart.component';
import { Product } from 'app/models/product';
import { ProductService } from 'app/product/product.service';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [CartComponent],
      providers: [ProductService, CartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pageTitle should be "Your Shopping Cart"', () => {
    expect(component.pageTitle).toBe('Your Shopping Cart');
  });

  it('loadCart should return void', () => {
    expect(component.loadCart()).toBeUndefined();
  });

  it('saveCart should return void', () => {
    expect(component.saveCart()).toBeUndefined();
  });

  it('addItem should return void', () => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    expect(component.addItem(product, 1, 1)).toBeUndefined();
  });

  it('removeItem should return void', () => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    const cartItem = { product: product, quantity: 1, price: 10 };
    expect(component.removeItem(cartItem)).toBeUndefined();
  });

  it('empty should return void', () => {
    expect(component.empty()).toBeUndefined();
  });
});
