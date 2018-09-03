import { AdminFunctionModule } from './admin-function.module';

describe('AdminFunctionModule', () => {
  let adminFunctionModule: AdminFunctionModule;

  beforeEach(() => {
    adminFunctionModule = new AdminFunctionModule();
  });

  it('should create an instance', () => {
    expect(adminFunctionModule).toBeTruthy();
  });
});
