import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseJobComponent } from "./enterprise-job/enterprise-job.component";

const routes: Routes = [
  {
    path: '',
    component: EnterpriseJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseJobRoutingModule { }
