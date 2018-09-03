import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDetailComponent } from './register-detail/register-detail.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDetailRoutingModule { }
