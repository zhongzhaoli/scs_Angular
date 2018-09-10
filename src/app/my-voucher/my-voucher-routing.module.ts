import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyVoucherComponent } from './my-voucher/my-voucher.component';

const routes: Routes = [
    {
        path: '',
        component: MyVoucherComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyVoucherRoutingModule { }
