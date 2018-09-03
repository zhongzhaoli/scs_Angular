import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindJobTypeRoutingModule } from './find-job-type-routing.module';
import { FindJobTypeComponent } from './find-job-type/find-job-type.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    FindJobTypeRoutingModule,
    HttpClientModule
  ],
  declarations: [FindJobTypeComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class FindJobTypeModule { }
