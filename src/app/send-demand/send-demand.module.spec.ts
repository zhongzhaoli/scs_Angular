import { SendDemandModule } from './send-demand.module';

describe('SendDemandModule', () => {
  let sendDemandModule: SendDemandModule;

  beforeEach(() => {
    sendDemandModule = new SendDemandModule();
  });

  it('should create an instance', () => {
    expect(sendDemandModule).toBeTruthy();
  });
});
