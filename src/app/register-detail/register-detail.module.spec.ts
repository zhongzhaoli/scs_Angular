import { RegisterDetailModule } from './register-detail.module';

describe('RegisterDetailModule', () => {
  let registerDetailModule: RegisterDetailModule;

  beforeEach(() => {
    registerDetailModule = new RegisterDetailModule();
  });

  it('should create an instance', () => {
    expect(registerDetailModule).toBeTruthy();
  });
});
