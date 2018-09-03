import { AdminEnterpriseModule } from './admin-enterprise.module';

describe('AdminEnterpriseModule', () => {
  let adminEnterpriseModule: AdminEnterpriseModule;

  beforeEach(() => {
    adminEnterpriseModule = new AdminEnterpriseModule();
  });

  it('should create an instance', () => {
    expect(adminEnterpriseModule).toBeTruthy();
  });
});
