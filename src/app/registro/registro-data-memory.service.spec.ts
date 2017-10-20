import { TestBed, inject } from '@angular/core/testing';

import { RegistroDataMemoryService } from './registro-data-memory.service';

describe('RegistroDataMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroDataMemoryService]
    });
  });

  it('should be created', inject([RegistroDataMemoryService], (service: RegistroDataMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
