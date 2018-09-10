import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVoucherComponent } from './my-voucher.component';

describe('MyVoucherComponent', () => {
  let component: MyVoucherComponent;
  let fixture: ComponentFixture<MyVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
