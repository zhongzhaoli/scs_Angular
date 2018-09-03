import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEvaluateRoutingModule } from './admin-evaluate-routing.module';
import { AdminEvaluateComponent } from './admin-evaluate/admin-evaluate.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminEvaluateRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminEvaluateComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminEvaluateModule { }
