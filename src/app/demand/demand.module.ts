import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandRoutingModule } from './demand-routing.module';
import { DemandComponent } from './demand/demand.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    DemandRoutingModule,
    HttpClientModule
  ],
  declarations: [DemandComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class DemandModule { }
