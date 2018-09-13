import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverMoneyComponent } from './admin-over-money.component';

describe('AdminOverMoneyComponent', () => {
  let component: AdminOverMoneyComponent;
  let fixture: ComponentFixture<AdminOverMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
