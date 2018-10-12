import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecruitmentComponent } from './send-recruitment.component';

describe('SendRecruitmentComponent', () => {
  let component: SendRecruitmentComponent;
  let fixture: ComponentFixture<SendRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
