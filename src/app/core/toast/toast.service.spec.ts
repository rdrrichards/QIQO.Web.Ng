import { TestBed, async, inject } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ToastService ]
    });
  });

  it(`should create`, async(inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  })));

  it(`activate should return undefined`, async(inject([ToastService], (service: ToastService) => {
    expect(service.activate()).toBeUndefined();
  })));

});
