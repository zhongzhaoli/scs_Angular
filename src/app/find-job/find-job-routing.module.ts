import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';

const routes: Routes = [
    {
        path: '',
        component: FindJobComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindJobRoutingModule { }
