import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getAccount should get`, async(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage(1)).toBeTruthy();
  })));

  it(`getAccounts should get`, async(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProducts()).toBeTruthy();
  })));
});
