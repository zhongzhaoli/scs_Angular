import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminJobFeedbackComponent } from "./admin-job-feedback/admin-job-feedback.component";

const routes: Routes = [
  {
    path: '',
    component: AdminJobFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminJobFeedbackRoutingModule { }
