import { EvaluateDetailModule } from './evaluate-detail.module';

describe('EvaluateDetailModule', () => {
  let evaluateDetailModule: EvaluateDetailModule;

  beforeEach(() => {
    evaluateDetailModule = new EvaluateDetailModule();
  });

  it('should create an instance', () => {
    expect(evaluateDetailModule).toBeTruthy();
  });
});
