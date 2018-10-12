import { RecruitmentModule } from './recruitment.module';

describe('RecruitmentModule', () => {
  let recruitmentModule: RecruitmentModule;

  beforeEach(() => {
    recruitmentModule = new RecruitmentModule();
  });

  it('should create an instance', () => {
    expect(recruitmentModule).toBeTruthy();
  });
});
