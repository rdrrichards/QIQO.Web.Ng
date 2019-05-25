import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationStart, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const authService = jasmine.createSpyObj('AuthService', ['getLoggedInUser', 'logout', 'isUserAuthenticated']);
    authService.isUserAuthenticated.and.returnValue(of(true));
    authService.getLoggedInUser.and.returnValue(of({userName: 'Test'}));
    authService.logout.and.returnValue(of(null));
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: AuthService, useValue: authService}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('isUserLoggedIn should return true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isUserLoggedIn()).toBeTruthy();
  });

  it('getUserName should return empty string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getUserName()).toBeFalsy();
  });

  it('logout should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.logout()).toBeUndefined();
  });

  it('checkRouterEvent should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.checkRouterEvent({})).toBeUndefined();
  });

  it('checkRouterEvent NavigationStart should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.checkRouterEvent(new NavigationStart(1, ''))).toBeUndefined();
  });

  it('checkRouterEvent NavigationEnd should return false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.checkRouterEvent(new NavigationEnd(1, '', ''))).toBeUndefined();
  });
});
