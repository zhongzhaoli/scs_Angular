import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobLeaderRoutingModule } from './job-leader-routing.module';
import { JobLeaderComponent } from './job-leader/job-leader.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    JobLeaderRoutingModule,
    HttpClientModule
  ],
  declarations: [JobLeaderComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class JobLeaderModule { }
