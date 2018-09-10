import { MyVoucherModule } from './my-voucher.module';

describe('MyVoucherModule', () => {
  let myVoucherModule: MyVoucherModule;

  beforeEach(() => {
    myVoucherModule = new MyVoucherModule();
  });

  it('should create an instance', () => {
    expect(myVoucherModule).toBeTruthy();
  });
});
