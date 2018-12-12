import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminJobSignComponent } from './admin-job-sign/admin-job-sign.component';

const routes: Routes = [
  {
      path: '',
      component: AdminJobSignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminJobSignRoutingModule { }
