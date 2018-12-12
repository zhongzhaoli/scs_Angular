import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminJobSignRoutingModule } from './admin-job-sign-routing.module';
import { AdminJobSignComponent } from './admin-job-sign/admin-job-sign.component';

import { ApiService } from '../api.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor';

@NgModule({
  imports: [
    CommonModule,
    AdminJobSignRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminJobSignComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminJobSignModule { }
