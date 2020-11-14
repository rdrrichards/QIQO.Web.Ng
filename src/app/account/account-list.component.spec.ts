import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountListComponent } from './account-list.component';
import { AccountService } from './account.service';
import { of } from 'rxjs';
import { IAccount } from 'app/models/account';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;
  const testAccounts: IAccount[] = [];
  beforeEach(waitForAsync(() => {
    const accountService = jasmine.createSpyObj('AccountService', ['getAccounts']);
    accountService.getAccounts.and.returnValue(of(testAccounts));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      declarations: [AccountListComponent],
      providers: [{ provide: AccountService, useValue: accountService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return true', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});
