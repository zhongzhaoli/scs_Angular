import { MyJobModule } from './my-job.module';

describe('MyJobModule', () => {
  let myJobModule: MyJobModule;

  beforeEach(() => {
    myJobModule = new MyJobModule();
  });

  it('should create an instance', () => {
    expect(myJobModule).toBeTruthy();
  });
});
