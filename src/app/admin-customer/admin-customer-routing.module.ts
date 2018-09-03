import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCustomerRoutingModule { }
