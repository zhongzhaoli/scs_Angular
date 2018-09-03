import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSignRoutingModule } from './job-sign-routing.module';
import { JobSignComponent } from './job-sign/job-sign.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    JobSignRoutingModule,
    HttpClientModule
  ],
  declarations: [JobSignComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class JobSignModule { }
