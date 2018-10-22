import { MyRecruitmentModule } from './my-recruitment.module';

describe('MyRecruitmentModule', () => {
  let myRecruitmentModule: MyRecruitmentModule;

  beforeEach(() => {
    myRecruitmentModule = new MyRecruitmentModule();
  });

  it('should create an instance', () => {
    expect(myRecruitmentModule).toBeTruthy();
  });
});
