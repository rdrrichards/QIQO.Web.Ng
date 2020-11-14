import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'app/auth/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    const authService = jasmine.createSpyObj('AuthService', ['getLoggedInUser', 'logout', 'isUserAuthenticated', 'login']);
    authService.isUserAuthenticated.and.returnValue(of(true));
    authService.getLoggedInUser.and.returnValue(of({userName: 'Test'}));
    authService.logout.and.returnValue(of(null));
    authService.login.and.returnValue(of({userName: 'Test'}));

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule ],
      declarations: [LoginComponent],
      providers: [{provide: AuthService, useValue: authService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logMeIn should return true', () => {
    expect(component.logMeIn()).toBeUndefined();
  });

  it('cancel should return void', () => {
    expect(component.cancel()).toBeUndefined();
  });
});
