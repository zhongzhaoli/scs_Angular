import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyVoucherRoutingModule } from './my-voucher-routing.module';
import { MyVoucherComponent } from './my-voucher/my-voucher.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    MyVoucherRoutingModule,
    HttpClientModule
  ],
  declarations: [MyVoucherComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class MyVoucherModule { }
