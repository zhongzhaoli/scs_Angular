import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendDemandRoutingModule } from './send-demand-routing.module';
import { SendDemandComponent } from './send-demand/send-demand.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    SendDemandRoutingModule,
    HttpClientModule
  ],
  declarations: [SendDemandComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class SendDemandModule { }
