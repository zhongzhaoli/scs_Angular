import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFunctionComponent } from './admin-function/admin-function.component';

const routes: Routes = [
  {
      path: '',
      component: AdminFunctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFunctionRoutingModule { }
