import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminExchangeComponent } from './admin-exchange/admin-exchange.component';

const routes: Routes = [
    {
        path: '',
        component: AdminExchangeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminExchangeRoutingModule { }
