import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGetMoneyRoutingModule } from './user-get-money-routing.module';
import { UserGetMoneyComponent } from './user-get-money/user-get-money.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    UserGetMoneyRoutingModule,
    HttpClientModule
  ],
  declarations: [UserGetMoneyComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class UserGetMoneyModule { }
