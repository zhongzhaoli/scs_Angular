import { AdminOverJobModule } from './admin-over-job.module';

describe('AdminOverJobModule', () => {
  let adminOverJobModule: AdminOverJobModule;

  beforeEach(() => {
    adminOverJobModule = new AdminOverJobModule();
  });

  it('should create an instance', () => {
    expect(adminOverJobModule).toBeTruthy();
  });
});
