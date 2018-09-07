import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEventComponent } from './admin-event/admin-event.component';

const routes: Routes = [
    {
        path: '',
        component: AdminEventComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEventRoutingModule { }
