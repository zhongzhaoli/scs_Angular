import { MyCustomerModule } from './my-customer.module';

describe('MyCustomerModule', () => {
  let myCustomerModule: MyCustomerModule;

  beforeEach(() => {
    myCustomerModule = new MyCustomerModule();
  });

  it('should create an instance', () => {
    expect(myCustomerModule).toBeTruthy();
  });
});
