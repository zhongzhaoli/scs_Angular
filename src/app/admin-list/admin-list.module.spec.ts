import { AdminListModule } from './admin-list.module';

describe('AdminListModule', () => {
  let adminListModule: AdminListModule;

  beforeEach(() => {
    adminListModule = new AdminListModule();
  });

  it('should create an instance', () => {
    expect(adminListModule).toBeTruthy();
  });
});
