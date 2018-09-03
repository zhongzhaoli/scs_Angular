import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLeaderComponent } from './job-leader.component';

describe('JobLeaderComponent', () => {
  let component: JobLeaderComponent;
  let fixture: ComponentFixture<JobLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
