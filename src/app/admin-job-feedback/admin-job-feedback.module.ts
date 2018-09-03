import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminJobFeedbackRoutingModule } from './admin-job-feedback-routing.module';
import { AdminJobFeedbackComponent } from './admin-job-feedback/admin-job-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    AdminJobFeedbackRoutingModule
  ],
  declarations: [AdminJobFeedbackComponent]
})
export class AdminJobFeedbackModule { }
