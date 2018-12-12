import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobSignComponent } from './admin-job-sign.component';

describe('AdminJobSignComponent', () => {
  let component: AdminJobSignComponent;
  let fixture: ComponentFixture<AdminJobSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
