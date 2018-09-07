import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOverJobComponent } from './admin-over-job/admin-over-job.component';

const routes: Routes = [
    {
        path: '',
        component: AdminOverJobComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOverJobRoutingModule { }
