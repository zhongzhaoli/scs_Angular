import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseJobComponent } from './enterprise-job.component';

describe('EnterpriseJobComponent', () => {
  let component: EnterpriseJobComponent;
  let fixture: ComponentFixture<EnterpriseJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
