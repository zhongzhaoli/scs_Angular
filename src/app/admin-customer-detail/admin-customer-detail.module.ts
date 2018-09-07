import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCustomerDetailRoutingModule } from './admin-customer-detail-routing.module';
import { AdminCustomerDetailComponent } from './admin-customer-detail/admin-customer-detail.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminCustomerDetailRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminCustomerDetailComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminCustomerDetailModule { }
