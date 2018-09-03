import { EnterpriseDetailModule } from './enterprise-detail.module';

describe('EnterpriseDetailModule', () => {
  let enterpriseDetailModule: EnterpriseDetailModule;

  beforeEach(() => {
    enterpriseDetailModule = new EnterpriseDetailModule();
  });

  it('should create an instance', () => {
    expect(enterpriseDetailModule).toBeTruthy();
  });
});
