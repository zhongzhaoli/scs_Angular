import { AdminJobModule } from './admin-job.module';

describe('AdminJobModule', () => {
  let adminJobModule: AdminJobModule;

  beforeEach(() => {
    adminJobModule = new AdminJobModule();
  });

  it('should create an instance', () => {
    expect(adminJobModule).toBeTruthy();
  });
});
