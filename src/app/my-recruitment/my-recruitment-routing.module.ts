import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecruitmentComponent } from './my-recruitment/my-recruitment.component'

const routes: Routes = [
  {
      path:'',
      component: MyRecruitmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecruitmentRoutingModule { }
