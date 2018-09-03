import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSignComponent } from './job-sign/job-sign.component';

const routes: Routes = [
  {
      path: '',
      component: JobSignComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSignRoutingModule { }
