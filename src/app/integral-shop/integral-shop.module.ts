import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegralShopRoutingModule } from './integral-shop-routing.module';
import { IntegralShopComponent } from './integral-shop/integral-shop.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    IntegralShopRoutingModule,
    HttpClientModule
  ],
  declarations: [IntegralShopComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class IntegralShopModule { }
