import { UserBillModule } from './user-bill.module';

describe('UserBillModule', () => {
  let userBillModule: UserBillModule;

  beforeEach(() => {
    userBillModule = new UserBillModule();
  });

  it('should create an instance', () => {
    expect(userBillModule).toBeTruthy();
  });
});
