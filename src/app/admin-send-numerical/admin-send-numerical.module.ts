import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSendNumericalRoutingModule } from './admin-send-numerical-routing.module';
import { AdminSendNumericalComponent } from './admin-send-numerical/admin-send-numerical.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    AdminSendNumericalRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminSendNumericalComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminSendNumericalModule { }
