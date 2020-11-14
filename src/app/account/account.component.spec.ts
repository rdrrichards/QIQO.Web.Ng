import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { EntityService } from '../core/entity.service';
import { ToastService } from '../core/toast/toast.service';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import { IAccount } from 'app/models/account';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const testAccount: IAccount = {
    accountKey: 1,
    accountCode: 'test',
    accountName: 'test',
    accountDesc: 'test',
    accountDBA: 'test',
    accountStartDate: new Date().toISOString(),
    accountEndDate: new Date().toISOString(),
    addresses: [],
    attributes: [],
    employees: []
  };

  beforeEach(waitForAsync(() => {
    const accountService = jasmine.createSpyObj('AccountService', ['getAccount', 'addAccount', 'deleteAccount', 'updateAccount']);
    accountService.getAccount.and.returnValue( of(testAccount) );
    accountService.addAccount.and.returnValue( of(testAccount) );
    accountService.deleteAccount.and.returnValue( of(testAccount) );
    accountService.updateAccount.and.returnValue( of(null) );

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [AccountComponent],
      providers: [{ provide: AccountService, useValue: accountService }, EntityService, ToastService, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    component.editAccount = {
      accountKey: 0,
      accountCode: 'string',
      accountName: 'string',
      accountDesc: 'string',
      accountDBA: 'string',
      accountStartDate: 'string',
      accountEndDate: 'string',
      addresses: [],
      attributes: [],
      employees: []
    };
    component.account = {
      accountKey: 0,
      accountCode: 'string',
      accountName: 'string',
      accountDesc: 'string',
      accountDBA: 'string',
      accountStartDate: 'string',
      accountEndDate: 'string',
      addresses: [],
      attributes: [],
      employees: []
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('canDeactivate should return true', () => {
    expect(component.canDeactivate()).toBeTruthy();
  });

  it('cancel should return void', () => {
    expect(component.cancel()).toBeUndefined();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('addAccount should return void', () => {
    expect(component.addAccount()).toBeUndefined();
  });

  it('updateAccount should return void', () => {
    expect(component.updateAccount()).toBeUndefined();
  });

  it('deleteAccount should return void', () => {
    expect(component.deleteAccount()).toBeUndefined();
  });

  it('isAddMode should return false', () => {
    expect(component.isAddMode()).toBeFalsy();
  });

  it('onBack should return void', () => {
    expect(component.onBack()).toBeUndefined();
  });

  it('getAccountOpenOrders should return void', () => {
    expect(component.getAccountOpenOrders()).toBeUndefined();
  });

  it('formatDate should return string', () => {
    expect(component.formatDate('2019-01-01')).toBeDefined();
  });
});
