import { TestBed, inject } from '@angular/core/testing';

import { CustomerDataServerService } from './customer-data-server.service';

describe('CustomerDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDataServerService]
    });
  });

  it('should be created', inject([CustomerDataServerService], (service: CustomerDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
