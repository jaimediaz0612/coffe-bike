import { TestBed, inject } from '@angular/core/testing';

import { ComidaDataServerService } from './comida-data-server.service';

describe('ComidaDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComidaDataServerService]
    });
  });

  it('should be created', inject([ComidaDataServerService], (service: ComidaDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
