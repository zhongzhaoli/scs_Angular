import { AdminEventModule } from './admin-event.module';

describe('AdminEventModule', () => {
  let adminEventModule: AdminEventModule;

  beforeEach(() => {
    adminEventModule = new AdminEventModule();
  });

  it('should create an instance', () => {
    expect(adminEventModule).toBeTruthy();
  });
});
