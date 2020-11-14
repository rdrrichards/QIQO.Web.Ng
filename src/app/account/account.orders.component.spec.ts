import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountOrdersComponent } from './account.orders.component';
import { OrderService } from 'app/orders/order.service';

describe('AccountOrdersComponent', () => {
  let component: AccountOrdersComponent;
  let fixture: ComponentFixture<AccountOrdersComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [AccountOrdersComponent],
      providers: [OrderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOrdersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('ngOnDestroy should return void', () => {
    component.ngOnInit();
    expect(component.ngOnDestroy()).toBeUndefined();
  });
});
