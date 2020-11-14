import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { IProduct, Product } from 'app/models/product';

describe('ProductService', () => {
  const testProduct: IProduct = new Product(1, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 1, 1);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getProductPage with defaults should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage()).toBeTruthy();
  })));


  it(`getProductPage with page should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage(1)).toBeTruthy();
  })));

  it(`getProductPage with pageSize should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage(1, 10)).toBeTruthy();
  })));

  it(`getProductPage with pageSize and orderBy should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage(1, 10, 'name')).toBeTruthy();
  })));

  it(`getProductPage with pageSize and orderBy and category should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProductPage(1, 10, 'category', 'product')).toBeTruthy();
  })));

  it(`getProducts should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProducts()).toBeTruthy();
  })));

  it(`getProduct should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.getProduct(0)).toBeTruthy();
  })));

  it(`addProduct should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.addProduct(testProduct)).toBeTruthy();
  })));

  it(`updateProduct should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.updateProduct(testProduct)).toBeTruthy();
  })));

  it(`deleteProduct should get`, waitForAsync(inject([ProductService, HttpTestingController],
    (service: ProductService, httpClient: HttpTestingController) => {
      expect(service.deleteProduct(1)).toBeTruthy();
  })));
});
