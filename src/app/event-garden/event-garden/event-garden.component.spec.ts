import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGardenComponent } from './event-garden.component';

describe('EventGardenComponent', () => {
  let component: EventGardenComponent;
  let fixture: ComponentFixture<EventGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
