import { TestBed, inject } from '@angular/core/testing';

import { DonorDashboardService } from './donor-dashboard.service';

describe('DonorDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorDashboardService]
    });
  });

  it('should be created', inject([DonorDashboardService], (service: DonorDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
