import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUserComponent } from './credit-user.component';

describe('CreditUserComponent', () => {
  let component: CreditUserComponent;
  let fixture: ComponentFixture<CreditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
