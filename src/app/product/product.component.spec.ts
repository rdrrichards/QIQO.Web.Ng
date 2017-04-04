/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { EntityService } from '../core/entity.service';
import { CartService } from '../cart/cart.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let productService: ProductService;
  let route: ActivatedRoute;
  let router: Router;
  let entityService: EntityService;
  let cartService: CartService;

  let productServiceStub: {};
  let routeStub: {};
  let routerStub: {};
  let entityServiceStub: {};
  let cartServiceStub: {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ProductComponent ],
      providers: [{ provide: ProductService, useValue: productServiceStub },
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: Router, useValue: routerStub },
        { provide: EntityService, useValue: entityServiceStub },
        { provide: CartService, useValue: cartServiceStub },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    productService = TestBed.get(ProductService);
    route = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
    entityService = TestBed.get(EntityService);
    cartService = TestBed.get(CartService);

    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
