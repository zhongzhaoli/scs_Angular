import { AdminLeaderModule } from './admin-leader.module';

describe('AdminLeaderModule', () => {
  let adminLeaderModule: AdminLeaderModule;

  beforeEach(() => {
    adminLeaderModule = new AdminLeaderModule();
  });

  it('should create an instance', () => {
    expect(adminLeaderModule).toBeTruthy();
  });
});
