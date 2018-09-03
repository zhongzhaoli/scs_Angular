import { FindJobTypeModule } from './find-job-type.module';

describe('FindJobTypeModule', () => {
  let findJobTypeModule: FindJobTypeModule;

  beforeEach(() => {
    findJobTypeModule = new FindJobTypeModule();
  });

  it('should create an instance', () => {
    expect(findJobTypeModule).toBeTruthy();
  });
});
