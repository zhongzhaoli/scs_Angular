import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSendNumericalComponent } from './admin-send-numerical/admin-send-numerical.component';

const routes: Routes = [
    {
       path: '',
       component: AdminSendNumericalComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSendNumericalRoutingModule { }
