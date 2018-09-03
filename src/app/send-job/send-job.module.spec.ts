import { SendJobModule } from './send-job.module';

describe('SendJobModule', () => {
  let sendJobModule: SendJobModule;

  beforeEach(() => {
    sendJobModule = new SendJobModule();
  });

  it('should create an instance', () => {
    expect(sendJobModule).toBeTruthy();
  });
});
