import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvaluateComponent } from './admin-evaluate.component';

describe('AdminEvaluateComponent', () => {
  let component: AdminEvaluateComponent;
  let fixture: ComponentFixture<AdminEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
