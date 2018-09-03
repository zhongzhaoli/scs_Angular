import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSignComponent } from './job-sign.component';

describe('JobSignComponent', () => {
  let component: JobSignComponent;
  let fixture: ComponentFixture<JobSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
