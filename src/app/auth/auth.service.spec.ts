import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { Login } from 'app/models/login';

describe('AuthService', () => {
  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService ]
    });
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`login should be truthy`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      const login = new Login('test', 'testpw', false);
      expect(service.login(login)).toBeTruthy();
  })));

  it(`logout should return truthy`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service.logout()).toBeTruthy();
  })));

  it(`register should return truthy`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service.register({userName: '', password: '', confirmPassword: ''})).toBeTruthy();
  })));

  it(`isUserAuthenticated should return true`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      localStorage.setItem('user', JSON.stringify(new Login('', '', false)));
      expect(service.isUserAuthenticated()).toBeTruthy();
  })));

  it(`isUserAuthenticated should return false`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      localStorage.removeItem('user');
      expect(service.isUserAuthenticated()).toBeFalsy();
  })));

  it(`getLoggedInUser should return something`, waitForAsync(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      localStorage.setItem('user', JSON.stringify(new Login('', '', false)));
      expect(service.getLoggedInUser()).toBeTruthy();
  })));
});
