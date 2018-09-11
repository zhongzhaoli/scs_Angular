import { DemandModule } from './demand.module';

describe('DemandModule', () => {
  let demandModule: DemandModule;

  beforeEach(() => {
    demandModule = new DemandModule();
  });

  it('should create an instance', () => {
    expect(demandModule).toBeTruthy();
  });
});
