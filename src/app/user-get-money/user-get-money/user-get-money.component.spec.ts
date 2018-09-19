import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetMoneyComponent } from './user-get-money.component';

describe('UserGetMoneyComponent', () => {
  let component: UserGetMoneyComponent;
  let fixture: ComponentFixture<UserGetMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
