import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AccountService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`addAccount should create`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      const editAccount = {
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
      expect(service.addAccount(editAccount)).toBeTruthy();
  })));
});
