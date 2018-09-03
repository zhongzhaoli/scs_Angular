import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFeedbackComponent } from './job-feedback/job-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: JobFeedbackComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFeedbackRoutingModule { }
