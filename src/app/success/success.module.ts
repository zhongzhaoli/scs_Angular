import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success/success.component';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    SuccessRoutingModule,
    HttpClientModule
  ],
  declarations: [SuccessComponent],
  providers: [
      ApiService
  ]
})
export class SuccessModule { }
