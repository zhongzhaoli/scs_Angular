import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminExchangeRoutingModule } from './admin-exchange-routing.module';
import { AdminExchangeComponent } from './admin-exchange/admin-exchange.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminExchangeRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminExchangeComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminExchangeModule { }
