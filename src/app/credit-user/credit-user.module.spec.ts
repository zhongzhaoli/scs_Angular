import { CreditUserModule } from './credit-user.module';

describe('CreditUserModule', () => {
  let creditUserModule: CreditUserModule;

  beforeEach(() => {
    creditUserModule = new CreditUserModule();
  });

  it('should create an instance', () => {
    expect(creditUserModule).toBeTruthy();
  });
});
