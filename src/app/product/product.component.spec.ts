import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { EntityService } from '../core/entity.service';
import { CartService } from '../cart/cart.service';
import { Product } from 'app/models/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ProductComponent],
      providers: [ ProductService, CartService, EntityService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
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

  it('onBack should return true', () => {
    expect(component.onBack()).toBeUndefined();
  });
});
