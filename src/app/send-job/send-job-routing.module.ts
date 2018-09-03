import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendJobComponent } from './send-job/send-job.component';

const routes: Routes = [
    {
        path: '',
        component: SendJobComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendJobRoutingModule { }
