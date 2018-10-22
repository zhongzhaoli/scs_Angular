import { AdminRecruitmentModule } from './admin-recruitment.module';

describe('AdminRecruitmentModule', () => {
  let adminRecruitmentModule: AdminRecruitmentModule;

  beforeEach(() => {
    adminRecruitmentModule = new AdminRecruitmentModule();
  });

  it('should create an instance', () => {
    expect(adminRecruitmentModule).toBeTruthy();
  });
});
