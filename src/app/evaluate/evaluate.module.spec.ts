import { EvaluateModule } from './evaluate.module';

describe('EvaluateModule', () => {
  let evaluateModule: EvaluateModule;

  beforeEach(() => {
    evaluateModule = new EvaluateModule();
  });

  it('should create an instance', () => {
    expect(evaluateModule).toBeTruthy();
  });
});
