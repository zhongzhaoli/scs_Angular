import { UserGetMoneyModule } from './user-get-money.module';

describe('UserGetMoneyModule', () => {
  let userGetMoneyModule: UserGetMoneyModule;

  beforeEach(() => {
    userGetMoneyModule = new UserGetMoneyModule();
  });

  it('should create an instance', () => {
    expect(userGetMoneyModule).toBeTruthy();
  });
});
