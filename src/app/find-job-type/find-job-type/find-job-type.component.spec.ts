import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobTypeComponent } from './find-job-type.component';

describe('FindJobTypeComponent', () => {
  let component: FindJobTypeComponent;
  let fixture: ComponentFixture<FindJobTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
