import { TestBed, inject } from '@angular/core/testing';

import { CustomerDataMemoryService } from './customer-data-memory.service';

describe('CustomerDataMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDataMemoryService]
    });
  });

  it('should be created', inject([CustomerDataMemoryService], (service: CustomerDataMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
