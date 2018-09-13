import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOverMoneyComponent } from './admin-over-money/admin-over-money.component';

const routes: Routes = [
    {
       path: '',
       component: AdminOverMoneyComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOverMoneyRoutingModule { }
