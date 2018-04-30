import { TestBed, inject } from '@angular/core/testing';

import { EntradaPersonalService } from './entrada-personal.service';

describe('EntradaPersonalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntradaPersonalService]
    });
  });

  it('should be created', inject([EntradaPersonalService], (service: EntradaPersonalService) => {
    expect(service).toBeTruthy();
  }));
});
