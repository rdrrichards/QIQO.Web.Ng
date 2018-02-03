/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { EntityService } from '../core/entity.service';
import { ModalService } from '../core/modal/modal.service';
import { ToastService } from '../core/toast/toast.service';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  const accountServiceStub = {};
  const routeStub = {};
  const routerStub = {};
  const entityServiceStub = {};
  const modalServiceStub = {};
  const toastServiceStub = {};

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AccountComponent],
      providers: [{ provide: AccountService, useValue: accountServiceStub },
      { provide: ActivatedRoute, useValue: routeStub },
      { provide: Router, useValue: routerStub },
      { provide: EntityService, useValue: entityServiceStub },
      { provide: ModalService, useValue: modalServiceStub },
      { provide: ToastService, useValue: toastServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
