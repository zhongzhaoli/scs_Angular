import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOverJobRoutingModule } from './admin-over-job-routing.module';
import { AdminOverJobComponent } from './admin-over-job/admin-over-job.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    AdminOverJobRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminOverJobComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminOverJobModule { }
