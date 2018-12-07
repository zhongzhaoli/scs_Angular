import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEventGardenComponent } from './admin-event-garden/admin-event-garden.component';

const routes: Routes = [
    {
        path: '',
        component: AdminEventGardenComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEventGardenRoutingModule { }
