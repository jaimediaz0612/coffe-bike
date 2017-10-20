import { TestBed, inject } from '@angular/core/testing';

import { BicicletaDataServerService } from './bicicleta-data-server.service';

describe('BicicletaDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BicicletaDataServerService]
    });
  });

  it('should be created', inject([BicicletaDataServerService], (service: BicicletaDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
