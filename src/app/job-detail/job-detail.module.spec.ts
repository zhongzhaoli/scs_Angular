import { JobDetailModule } from './job-detail.module';

describe('JobDetailModule', () => {
  let jobDetailModule: JobDetailModule;

  beforeEach(() => {
    jobDetailModule = new JobDetailModule();
  });

  it('should create an instance', () => {
    expect(jobDetailModule).toBeTruthy();
  });
});
