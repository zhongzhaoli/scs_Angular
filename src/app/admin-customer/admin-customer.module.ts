import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCustomerRoutingModule } from './admin-customer-routing.module';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminCustomerRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminCustomerComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminCustomerModule { }
