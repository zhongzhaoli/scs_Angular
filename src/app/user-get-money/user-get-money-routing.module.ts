import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGetMoneyComponent } from './user-get-money/user-get-money.component';

const routes: Routes = [
    {
       path: '',
       component: UserGetMoneyComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGetMoneyRoutingModule { }
