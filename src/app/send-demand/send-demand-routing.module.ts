import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendDemandComponent } from './send-demand/send-demand.component';

const routes: Routes = [
    {
       path: '',
       component: SendDemandComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendDemandRoutingModule { }
