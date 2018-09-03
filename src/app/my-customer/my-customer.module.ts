import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCustomerRoutingModule } from './my-customer-routing.module';
import { MyCustomerComponent } from './my-customer/my-customer.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    MyCustomerRoutingModule,
    HttpClientModule
  ],
  declarations: [MyCustomerComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class MyCustomerModule { }
