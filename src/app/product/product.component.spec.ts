import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { EntityService } from '../core/entity.service';
import { CartService } from '../cart/cart.service';
import { Product, IProduct } from 'app/models/product';
import { of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const testProduct: IProduct = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);

  beforeEach(async(() => {
    const productService = jasmine.createSpyObj('ProductService', ['getProduct', 'addProduct', 'updateProduct', 'deleteProduct']);
    productService.getProduct.and.returnValue(of(testProduct));
    productService.addProduct.and.returnValue(of(testProduct));
    productService.updateProduct.and.returnValue(of(testProduct));
    productService.deleteProduct.and.returnValue(of(null));

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ProductComponent],
      providers: [ { provide: ProductService, useValue: productService}, CartService, EntityService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = testProduct;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('canDeactivate should return true', () => {
    expect(component.canDeactivate()).toBeTruthy();
  });

  it('canDeactivangOnInitte should return true', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('cancel should return void', () => {
    expect(component.cancel()).toBeUndefined();
  });

  it('addProduct should return true', () => {
    expect(component.addProduct()).toBeUndefined();
  });

  it('updateProduct should return true', () => {
    expect(component.updateProduct()).toBeUndefined();
  });

  it('isAddMode should return true', () => {
    expect(component.isAddMode()).toBeFalsy();
  });

  it('deleteProduct should return true', () => {
    expect(component.deleteProduct()).toBeUndefined();
  });

  it('addToCart should return true', () => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    expect(component.addToCart(product)).toBeUndefined();
  });

  it('addToCart with quantity should return true', () => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    expect(component.addToCart(product, 2)).toBeUndefined();
  });

  it('addToCart with quantity and price should return true', () => {
    const product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
    expect(component.addToCart(product, 3, 20.00)).toBeUndefined();
  });

  it('onBack should return true', () => {
    expect(component.onBack()).toBeUndefined();
  });
});
