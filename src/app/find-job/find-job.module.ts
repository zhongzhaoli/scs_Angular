import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindJobRoutingModule } from './find-job-routing.module';
import { FindJobComponent } from './find-job/find-job.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    FindJobRoutingModule,
    HttpClientModule
  ],
  declarations: [FindJobComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class FindJobModule { }
