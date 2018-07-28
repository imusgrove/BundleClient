import { TestBed, inject } from '@angular/core/testing';

import { DonorAuthService } from './donorAuth.service';

describe('DonorAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorAuthService]
    });
  });

  it('should be created', inject([DonorAuthService], (service: DonorAuthService) => {
    expect(service).toBeTruthy();
  }));
});
