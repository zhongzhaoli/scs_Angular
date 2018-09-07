import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegralShopComponent } from './integral-shop/integral-shop.component';

const routes: Routes = [
    {
        path: '',
        component: IntegralShopComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegralShopRoutingModule { }
