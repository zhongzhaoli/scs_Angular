import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendRecruitmentComponent } from './send-recruitment/send-recruitment.component';

const routes: Routes = [
    {
       path: '',
        component: SendRecruitmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendRecruitmentRoutingModule { }
