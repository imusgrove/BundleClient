import { TestBed, inject } from '@angular/core/testing';

import { DonorStateServiceService } from './donor-state-service.service';

describe('DonorStateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorStateServiceService]
    });
  });

  it('should be created', inject([DonorStateServiceService], (service: DonorStateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
