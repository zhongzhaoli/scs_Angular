import { AdminSendNumericalModule } from './admin-send-numerical.module';

describe('AdminSendNumericalModule', () => {
  let adminSendNumericalModule: AdminSendNumericalModule;

  beforeEach(() => {
    adminSendNumericalModule = new AdminSendNumericalModule();
  });

  it('should create an instance', () => {
    expect(adminSendNumericalModule).toBeTruthy();
  });
});
