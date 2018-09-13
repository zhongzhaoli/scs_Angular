import { AdminOverMoneyModule } from './admin-over-money.module';

describe('AdminOverMoneyModule', () => {
  let adminOverMoneyModule: AdminOverMoneyModule;

  beforeEach(() => {
    adminOverMoneyModule = new AdminOverMoneyModule();
  });

  it('should create an instance', () => {
    expect(adminOverMoneyModule).toBeTruthy();
  });
});
