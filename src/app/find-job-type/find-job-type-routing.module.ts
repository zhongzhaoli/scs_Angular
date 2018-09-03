import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindJobTypeComponent } from './find-job-type/find-job-type.component';

const routes: Routes = [
  {
    path: '',
    component: FindJobTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindJobTypeRoutingModule { }
