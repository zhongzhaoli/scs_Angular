import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditUserRoutingModule } from './credit-user-routing.module';
import { CreditUserComponent } from './credit-user/credit-user.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    CreditUserRoutingModule,
    HttpClientModule
  ],
  declarations: [CreditUserComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class CreditUserModule { }
