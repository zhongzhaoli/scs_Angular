import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

const routes: Routes = [
  {
      path: '',
      component: EnterpriseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseDetailRoutingModule { }
