import { DonorDashboardModule } from './donor-dashboard.module';

describe('DonorDashboardModule', () => {
  let donorDashboardModule: DonorDashboardModule;

  beforeEach(() => {
    donorDashboardModule = new DonorDashboardModule();
  });

  it('should create an instance', () => {
    expect(donorDashboardModule).toBeTruthy();
  });
});
