import { TestBed, inject } from '@angular/core/testing';

import { ComidaDataMemoryService } from './comida-data-memory.service';

describe('ComidaDataMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComidaDataMemoryService]
    });
  });

  it('should be created', inject([ComidaDataMemoryService], (service: ComidaDataMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
