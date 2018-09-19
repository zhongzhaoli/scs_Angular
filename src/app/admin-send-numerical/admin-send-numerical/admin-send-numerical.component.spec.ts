import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendNumericalComponent } from './admin-send-numerical.component';

describe('AdminSendNumericalComponent', () => {
  let component: AdminSendNumericalComponent;
  let fixture: ComponentFixture<AdminSendNumericalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSendNumericalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSendNumericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
