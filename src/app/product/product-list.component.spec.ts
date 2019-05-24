import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { EntityService } from '../core/entity.service';
import { CartService } from '../cart/cart.service';
import { Product } from 'app/models/product';
import { ProductPage } from 'app/models/product-page';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ProductListComponent],
      providers: [ ProductService, CartService, EntityService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    component.products = [new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1)];
    component.page = new ProductPage(1, 1, 1, '', '', '', '', 1, []);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('next should return true', () => {
    expect(component.next(2, 7, 'name', 'category')).toBeUndefined();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('canGoBack should return true', () => {
    expect(component.canGoBack()).toBeTruthy();
  });

  it('canGoForward should return true', () => {
    expect(component.canGoForward()).toBeTruthy();
  });

  it('categoryChanged should return true', () => {
    expect(component.categoryChanged()).toBeFalsy();
  });

  it('pageCountChanged should return true', () => {
    expect(component.pageCountChanged(7)).toBeUndefined();
  });

  it('orderByChanged should return true', () => {
    expect(component.orderByChanged('')).toBeUndefined();
  });
});
