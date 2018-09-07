import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCustomerDetailComponent } from './admin-customer-detail/admin-customer-detail.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCustomerDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCustomerDetailRoutingModule { }
