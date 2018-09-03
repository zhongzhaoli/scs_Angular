import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobRoutingModule } from './my-job-routing.module';
import { MyJobComponent } from './my-job/my-job.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    MyJobRoutingModule,
    HttpClientModule
  ],
  declarations: [MyJobComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class MyJobModule { }
