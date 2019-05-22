import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ OrderService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`addOrder should create`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
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
      const order = {
        orderKey: 0,
        orderNumber: '',
        orderEntryDate: new Date(),
        orderStatusDate: new Date(),
        orderStatus: '',
        orderItemCount: 0,
        orderValueSum: 0,
        account: editAccount,
        orderItems: [],
        salesRepName: '',
        accountRepName: '',
        accountContactName: '',
        accountCode: '',
      };
      expect(service.addOrder(order)).toBeTruthy();
  })));

  it(`updateOrder should update`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
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
      const order = {
        orderKey: 0,
        orderNumber: '',
        orderEntryDate: new Date(),
        orderStatusDate: new Date(),
        orderStatus: '',
        orderItemCount: 0,
        orderValueSum: 0,
        account: editAccount,
        orderItems: [],
        salesRepName: '',
        accountRepName: '',
        accountContactName: '',
        accountCode: '',
      };
      expect(service.updateOrder(order)).toBeTruthy();
  })));

  it(`getOrder should get`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service.getOrder(1)).toBeTruthy();
  })));

  it(`getOrders should get`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service.getOrders()).toBeTruthy();
  })));

  it(`getAccountOrder should get`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service.getAccountOrder(1, 1)).toBeTruthy();
  })));

  it(`getAccountOrders should get`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service.getAccountOrders(1)).toBeTruthy();
  })));

  it(`deleteOrder should get`, async(inject([OrderService, HttpTestingController],
    (service: OrderService, httpClient: HttpTestingController) => {
      expect(service.deleteOrder(1)).toBeTruthy();
  })));
});
