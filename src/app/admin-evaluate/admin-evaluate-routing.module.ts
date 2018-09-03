import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEvaluateComponent } from './admin-evaluate/admin-evaluate.component';

const routes: Routes = [
  {
    path: '',
    component: AdminEvaluateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEvaluateRoutingModule { }
