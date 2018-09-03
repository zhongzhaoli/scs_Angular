import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFunctionRoutingModule } from './admin-function-routing.module';
import { AdminFunctionComponent } from './admin-function/admin-function.component';

@NgModule({
  imports: [
    CommonModule,
    AdminFunctionRoutingModule
  ],
  declarations: [AdminFunctionComponent]
})
export class AdminFunctionModule { }
