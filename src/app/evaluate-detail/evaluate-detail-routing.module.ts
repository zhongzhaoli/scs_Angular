import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluateDetailComponent } from './evaluate-detail/evaluate-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateDetailRoutingModule { }
