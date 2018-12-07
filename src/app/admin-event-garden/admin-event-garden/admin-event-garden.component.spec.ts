import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventGardenComponent } from './admin-event-garden.component';

describe('AdminEventGardenComponent', () => {
  let component: AdminEventGardenComponent;
  let fixture: ComponentFixture<AdminEventGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
