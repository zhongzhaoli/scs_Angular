import { FindJobModule } from './find-job.module';

describe('FindJobModule', () => {
  let findJobModule: FindJobModule;

  beforeEach(() => {
    findJobModule = new FindJobModule();
  });

  it('should create an instance', () => {
    expect(findJobModule).toBeTruthy();
  });
});
