import { JobFeedbackModule } from './job-feedback.module';

describe('JobFeedbackModule', () => {
  let jobFeedbackModule: JobFeedbackModule;

  beforeEach(() => {
    jobFeedbackModule = new JobFeedbackModule();
  });

  it('should create an instance', () => {
    expect(jobFeedbackModule).toBeTruthy();
  });
});
