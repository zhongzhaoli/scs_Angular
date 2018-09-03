import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseJobRoutingModule } from './enterprise-job-routing.module';
import { EnterpriseJobComponent } from './enterprise-job/enterprise-job.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    EnterpriseJobRoutingModule,
    HttpClientModule
  ],
  declarations: [EnterpriseJobComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class EnterpriseJobModule { }
