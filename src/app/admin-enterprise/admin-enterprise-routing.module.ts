import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEnterpriseComponent } from './admin-enterprise/admin-enterprise.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEnterpriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEnterpriseRoutingModule { }
