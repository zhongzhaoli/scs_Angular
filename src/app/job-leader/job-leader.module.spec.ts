import { JobLeaderModule } from './job-leader.module';

describe('JobLeaderModule', () => {
  let jobLeaderModule: JobLeaderModule;

  beforeEach(() => {
    jobLeaderModule = new JobLeaderModule();
  });

  it('should create an instance', () => {
    expect(jobLeaderModule).toBeTruthy();
  });
});
