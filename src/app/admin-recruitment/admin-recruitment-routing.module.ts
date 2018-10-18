import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRecruitmentComponent } from './admin-recruitment/admin-recruitment.component';

const routes: Routes = [
  {
      path: '',
      component: AdminRecruitmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRecruitmentRoutingModule { }
