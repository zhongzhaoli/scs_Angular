import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBillRoutingModule } from './user-bill-routing.module';
import { UserBillComponent } from './user-bill/user-bill.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    UserBillRoutingModule,
    HttpClientModule
  ],
  declarations: [UserBillComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class UserBillModule { }
