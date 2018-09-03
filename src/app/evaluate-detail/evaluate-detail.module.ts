import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateDetailRoutingModule } from './evaluate-detail-routing.module';
import { EvaluateDetailComponent } from './evaluate-detail/evaluate-detail.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    EvaluateDetailRoutingModule,
    HttpClientModule
  ],
  declarations: [EvaluateDetailComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class EvaluateDetailModule { }
