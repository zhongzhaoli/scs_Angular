import { AdminExchangeModule } from './admin-exchange.module';

describe('AdminExchangeModule', () => {
  let adminExchangeModule: AdminExchangeModule;

  beforeEach(() => {
    adminExchangeModule = new AdminExchangeModule();
  });

  it('should create an instance', () => {
    expect(adminExchangeModule).toBeTruthy();
  });
});
