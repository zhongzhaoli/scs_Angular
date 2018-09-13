import { MyDemandModule } from './my-demand.module';

describe('MyDemandModule', () => {
  let myDemandModule: MyDemandModule;

  beforeEach(() => {
    myDemandModule = new MyDemandModule();
  });

  it('should create an instance', () => {
    expect(myDemandModule).toBeTruthy();
  });
});
