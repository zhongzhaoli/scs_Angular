import { AdminCustomerModule } from './admin-customer.module';

describe('AdminCustomerModule', () => {
  let adminCustomerModule: AdminCustomerModule;

  beforeEach(() => {
    adminCustomerModule = new AdminCustomerModule();
  });

  it('should create an instance', () => {
    expect(adminCustomerModule).toBeTruthy();
  });
});
