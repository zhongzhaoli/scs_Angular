import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDemandRoutingModule } from './my-demand-routing.module';
import { MyDemandComponent } from './my-demand/my-demand.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    MyDemandRoutingModule,
    HttpClientModule
  ],
  declarations: [MyDemandComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class MyDemandModule { }
