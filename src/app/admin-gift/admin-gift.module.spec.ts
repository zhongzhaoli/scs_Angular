import { AdminGiftModule } from './admin-gift.module';

describe('AdminGiftModule', () => {
  let adminGiftModule: AdminGiftModule;

  beforeEach(() => {
    adminGiftModule = new AdminGiftModule();
  });

  it('should create an instance', () => {
    expect(adminGiftModule).toBeTruthy();
  });
});
