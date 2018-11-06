import { ScsNumModule } from './scs-num.module';

describe('ScsNumModule', () => {
  let scsNumModule: ScsNumModule;

  beforeEach(() => {
    scsNumModule = new ScsNumModule();
  });

  it('should create an instance', () => {
    expect(scsNumModule).toBeTruthy();
  });
});
