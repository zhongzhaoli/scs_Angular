import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGiftComponent } from './admin-gift/admin-gift.component';

const routes: Routes = [
    {
       path: '',
       component: AdminGiftComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGiftRoutingModule { }
