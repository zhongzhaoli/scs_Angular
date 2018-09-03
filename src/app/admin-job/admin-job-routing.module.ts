import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminJobComponent } from './admin-job/admin-job.component';
const routes: Routes = [
    {
        path: '',
        component: AdminJobComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminJobRoutingModule { }
