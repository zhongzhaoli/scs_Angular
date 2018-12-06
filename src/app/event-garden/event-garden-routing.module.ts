import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventGardenComponent } from './event-garden/event-garden.component';

const routes: Routes = [
    {
        path: '',
        component: EventGardenComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventGardenRoutingModule { }
