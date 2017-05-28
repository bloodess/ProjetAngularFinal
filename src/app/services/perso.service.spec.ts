import { TestBed, inject } from '@angular/core/testing';

import { PersoService } from './perso.service';

describe('PersoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersoService]
    });
  });

  it('should ...', inject([PersoService], (service: PersoService) => {
    expect(service).toBeTruthy();
  }));
});
