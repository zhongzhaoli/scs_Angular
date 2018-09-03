import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFeedbackRoutingModule } from './job-feedback-routing.module';
import { JobFeedbackComponent } from './job-feedback/job-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    JobFeedbackRoutingModule
  ],
  declarations: [JobFeedbackComponent]
})
export class JobFeedbackModule { }
