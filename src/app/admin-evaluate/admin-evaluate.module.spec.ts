import { AdminEvaluateModule } from './admin-evaluate.module';

describe('AdminEvaluateModule', () => {
  let adminEvaluateModule: AdminEvaluateModule;

  beforeEach(() => {
    adminEvaluateModule = new AdminEvaluateModule();
  });

  it('should create an instance', () => {
    expect(adminEvaluateModule).toBeTruthy();
  });
});
