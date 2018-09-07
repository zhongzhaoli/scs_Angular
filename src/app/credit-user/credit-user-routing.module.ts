import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditUserComponent } from './credit-user/credit-user.component';

const routes: Routes = [
    {
        path: '',
        component: CreditUserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditUserRoutingModule { }
