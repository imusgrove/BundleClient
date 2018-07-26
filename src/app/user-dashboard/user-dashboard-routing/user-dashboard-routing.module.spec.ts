import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

describe('UserDashboardRoutingModule', () => {
  let userDashboardRoutingModule: UserDashboardRoutingModule;

  beforeEach(() => {
    userDashboardRoutingModule = new UserDashboardRoutingModule();
  });

  it('should create an instance', () => {
    expect(userDashboardRoutingModule).toBeTruthy();
  });
});
