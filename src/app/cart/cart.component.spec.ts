import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartComponent } from './cart.component';
import { Product, IProduct } from 'app/models/product';
import { ProductService } from 'app/product/product.service';
import { CartService } from './cart.service';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const testProduct: IProduct = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);

  beforeEach(waitForAsync(() => {
    const productService = jasmine.createSpyObj('ProductService', ['getProduct']);
    productService.getProduct.and.returnValue(of(testProduct));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [CartComponent],
      providers: [{ provide: ProductService, useValue: productService}, CartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    component.cart = { id: 'test', account: undefined, orderDeliverByDate: undefined,
      cartItems: [{ product: product, quantity: 1, price: 1 }] };
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

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
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

  it('isEmpty should return false', () => {
    expect(component.isEmpty()).toBeFalsy();
  });

  it('isEmpty should return true', () => {
    component.cart.cartItems = [];
    expect(component.isEmpty()).toBeTruthy();
  });

  it('testAddItem should return void', () => {
    expect(component.testAddItem(3)).toBeUndefined();
  });
});
