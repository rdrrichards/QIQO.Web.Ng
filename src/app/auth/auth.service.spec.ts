import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { Login } from 'app/models/login';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`login should be truthy`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      const login = new Login('test', 'testpw', false);
      expect(service.login(login)).toBeTruthy();
  })));

  it(`logout should return truthy`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service.logout()).toBeTruthy();
  })));

  it(`isUserAuthenticated should return true`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service.isUserAuthenticated()).toBeTruthy();
  })));

  it(`getLoggedInUser should return false`, async(inject([AuthService, HttpTestingController],
    (service: AuthService, httpClient: HttpTestingController) => {
      expect(service.getLoggedInUser()).toBeTruthy();
  })));
});
