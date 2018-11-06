import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScsNumComponent } from './scs-num/scs-num.component';

const routes: Routes = [
  {
     path: '',
     component: ScsNumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScsNumRoutingModule { }
