import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { EntityService } from '../core/entity.service';
import { CartService } from '../cart/cart.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const productServiceStub = {};
  const routeStub = {};
  const routerStub = {};
  const entityServiceStub = {};
  const cartServiceStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductComponent],
      providers: [{ provide: ProductService, useValue: productServiceStub },
        { provide: ActivatedRoute, useValue: routeStub },
        { provide: Router, useValue: routerStub },
        { provide: CartService, useValue: cartServiceStub },
        { provide: EntityService, useValue: entityServiceStub }
    ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
