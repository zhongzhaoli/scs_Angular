import { AdminJobFeedbackModule } from './admin-job-feedback.module';

describe('AdminJobFeedbackModule', () => {
  let adminJobFeedbackModule: AdminJobFeedbackModule;

  beforeEach(() => {
    adminJobFeedbackModule = new AdminJobFeedbackModule();
  });

  it('should create an instance', () => {
    expect(adminJobFeedbackModule).toBeTruthy();
  });
});
