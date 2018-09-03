import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailRoutingModule } from './job-detail-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    JobDetailRoutingModule,
    HttpClientModule
  ],
  declarations: [JobDetailComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class JobDetailModule { }
