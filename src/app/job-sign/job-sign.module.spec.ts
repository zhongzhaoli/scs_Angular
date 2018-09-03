import { JobSignModule } from './job-sign.module';

describe('JobSignModule', () => {
  let jobSignModule: JobSignModule;

  beforeEach(() => {
    jobSignModule = new JobSignModule();
  });

  it('should create an instance', () => {
    expect(jobSignModule).toBeTruthy();
  });
});
