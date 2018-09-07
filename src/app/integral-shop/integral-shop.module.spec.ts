import { IntegralShopModule } from './integral-shop.module';

describe('IntegralShopModule', () => {
  let integralShopModule: IntegralShopModule;

  beforeEach(() => {
    integralShopModule = new IntegralShopModule();
  });

  it('should create an instance', () => {
    expect(integralShopModule).toBeTruthy();
  });
});
