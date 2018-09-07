import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverJobComponent } from './admin-over-job.component';

describe('AdminOverJobComponent', () => {
  let component: AdminOverJobComponent;
  let fixture: ComponentFixture<AdminOverJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
