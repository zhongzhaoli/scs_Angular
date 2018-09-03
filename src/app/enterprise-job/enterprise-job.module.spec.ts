import { EnterpriseJobModule } from './enterprise-job.module';

describe('EnterpriseJobModule', () => {
  let enterpriseJobModule: EnterpriseJobModule;

  beforeEach(() => {
    enterpriseJobModule = new EnterpriseJobModule();
  });

  it('should create an instance', () => {
    expect(enterpriseJobModule).toBeTruthy();
  });
});
