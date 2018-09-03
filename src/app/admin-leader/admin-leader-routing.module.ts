import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLeaderComponent } from './admin-leader/admin-leader.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLeaderComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLeaderRoutingModule { }
