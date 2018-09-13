import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOverMoneyRoutingModule } from './admin-over-money-routing.module';
import { AdminOverMoneyComponent } from './admin-over-money/admin-over-money.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminOverMoneyRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminOverMoneyComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminOverMoneyModule { }
