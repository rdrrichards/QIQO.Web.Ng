import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ToastService ]
    });
  });

  it(`should create`, waitForAsync(inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  })));

  it(`activate should return undefined`, waitForAsync(inject([ToastService], (service: ToastService) => {
    expect(service.activate()).toBeUndefined();
  })));

});
