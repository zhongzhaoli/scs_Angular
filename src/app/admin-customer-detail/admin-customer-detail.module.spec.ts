import { AdminCustomerDetailModule } from './admin-customer-detail.module';

describe('AdminCustomerDetailModule', () => {
  let adminCustomerDetailModule: AdminCustomerDetailModule;

  beforeEach(() => {
    adminCustomerDetailModule = new AdminCustomerDetailModule();
  });

  it('should create an instance', () => {
    expect(adminCustomerDetailModule).toBeTruthy();
  });
});
