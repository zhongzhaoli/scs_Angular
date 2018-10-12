import { SendRecruitmentModule } from './send-recruitment.module';

describe('SendRecruitmentModule', () => {
  let sendRecruitmentModule: SendRecruitmentModule;

  beforeEach(() => {
    sendRecruitmentModule = new SendRecruitmentModule();
  });

  it('should create an instance', () => {
    expect(sendRecruitmentModule).toBeTruthy();
  });
});
