/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { EntityService } from '../core/entity.service';
import { ModalService } from '../core/modal/modal.service';
import { ToastService } from '../core/toast/toast.service';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  // let http: Http;
  // let exService: ExceptionService;
  let accountService: AccountService;
  let route: ActivatedRoute;
  let router: Router;
  let entityService: EntityService;
  let modalService: ModalService;
  let toastService: ToastService;

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

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AccountComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    // stub UserService for test purposes
    // accountService = { };

    // TestBed.configureTestingModule({
    //   imports: [ FormsModule ],
    //   declarations: [ AccountComponent ],
    //   providers: [{ provide: AccountService, useValue: accountServiceStub },
    //     { provide: ActivatedRoute, useValue: routeStub },
    //     { provide: Router, useValue: routerStub },
    //     { provide: EntityService, useValue: entityServiceStub },
    //     { provide: ModalService, useValue: modalServiceStub },
    //     { provide: ToastService, useValue: toastServiceStub }]
    // });

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;

    // UserService from the root injector
    accountService = TestBed.get(AccountService);
    route = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
    entityService = TestBed.get(EntityService);
    modalService = TestBed.get(ModalService);
    toastService = TestBed.get(ToastService);
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AccountComponent);

  //   accountService = fixture.debugElement.injector.get(AccountService);
  //   route = fixture.debugElement.injector.get(ActivatedRoute);
  //   router = fixture.debugElement.injector.get(Router);
  //   entityService = fixture.debugElement.injector.get(EntityService);
  //   modalService = fixture.debugElement.injector.get(ModalService);
  //   toastService = fixture.debugElement.injector.get(ToastService);

  //   component = fixture.componentInstance;

  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
