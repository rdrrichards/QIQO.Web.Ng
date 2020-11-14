import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OpenOrdersComponent } from './open-orders.component';
import { OrderService } from './order.service';
import { IOrder } from 'app/models/order';
import { of } from 'rxjs';

describe('OpenOrdersComponent', () => {
  let component: OpenOrdersComponent;
  let fixture: ComponentFixture<OpenOrdersComponent>;
  const testOrders: IOrder[] = [];

  beforeEach(waitForAsync(() => {
    const orderService = jasmine.createSpyObj('OrderService', ['getOrders']);
    orderService.getOrders.and.returnValue(of(testOrders));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [OpenOrdersComponent],
      providers: [{ provide: OrderService, useValue: orderService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrdersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should pop', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

});
