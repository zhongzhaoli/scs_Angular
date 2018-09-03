import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobLeaderComponent } from './job-leader/job-leader.component';


const routes: Routes = [
  {
    path: '',
    component: JobLeaderComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobLeaderRoutingModule { }
