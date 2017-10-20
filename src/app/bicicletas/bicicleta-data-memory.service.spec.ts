import { TestBed, inject } from '@angular/core/testing';

import { BicicletaDataMemoryService } from './bicicleta-data-memory.service';

describe('BicicletaDataMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BicicletaDataMemoryService]
    });
  });

  it('should be created', inject([BicicletaDataMemoryService], (service: BicicletaDataMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
