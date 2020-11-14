import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { EntityService } from './entity.service';

describe('EntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ EntityService ]
    });
  });

  it(`should create`, waitForAsync(inject([EntityService], (service: EntityService) => {
    expect(service).toBeTruthy();
  })));

  it(`clone should return undefined`, waitForAsync(inject([EntityService], (service: EntityService) => {
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [] };
    expect(service.clone(cart)).toBeDefined(cart);
  })));

  it(`propertiesDiffer should return undefined`, waitForAsync(inject([EntityService], (service: EntityService) => {
    const cart = { id: 'test', account: undefined, orderDeliverByDate: undefined, cartItems: [] };
    expect(service.propertiesDiffer(cart, cart)).toBeUndefined();
  })));

});
