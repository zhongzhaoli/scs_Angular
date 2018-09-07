import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBillComponent } from './user-bill/user-bill.component';

const routes: Routes = [
    {
        path: '',
        component: UserBillComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBillRoutingModule { }
