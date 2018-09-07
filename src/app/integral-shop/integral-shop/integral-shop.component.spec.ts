import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralShopComponent } from './integral-shop.component';

describe('IntegralShopComponent', () => {
  let component: IntegralShopComponent;
  let fixture: ComponentFixture<IntegralShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
