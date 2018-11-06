import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsNumComponent } from './scs-num.component';

describe('ScsNumComponent', () => {
  let component: ScsNumComponent;
  let fixture: ComponentFixture<ScsNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
