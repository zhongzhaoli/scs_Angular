import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDemandComponent } from './my-demand/my-demand.component';
const routes: Routes = [
    {
       path: '',
       component: MyDemandComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDemandRoutingModule { }
