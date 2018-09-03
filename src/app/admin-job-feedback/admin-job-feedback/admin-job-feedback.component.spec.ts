import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobFeedbackComponent } from './admin-job-feedback.component';

describe('AdminJobFeedbackComponent', () => {
  let component: AdminJobFeedbackComponent;
  let fixture: ComponentFixture<AdminJobFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
