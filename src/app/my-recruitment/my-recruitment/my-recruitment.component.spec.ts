import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecruitmentComponent } from './my-recruitment.component';

describe('MyRecruitmentComponent', () => {
  let component: MyRecruitmentComponent;
  let fixture: ComponentFixture<MyRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
