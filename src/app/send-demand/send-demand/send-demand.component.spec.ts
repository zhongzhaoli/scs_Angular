import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDemandComponent } from './send-demand.component';

describe('SendDemandComponent', () => {
  let component: SendDemandComponent;
  let fixture: ComponentFixture<SendDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
