import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountOrderComponent } from './account.order.component';
import { OrderService } from 'app/orders/order.service';

describe('AccountOrderComponent', () => {
  let component: AccountOrderComponent;
  let fixture: ComponentFixture<AccountOrderComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [AccountOrderComponent],
      providers: [OrderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOrderComponent);
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
