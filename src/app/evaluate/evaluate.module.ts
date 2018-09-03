import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateRoutingModule } from './evaluate-routing.module';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    EvaluateRoutingModule,
    HttpClientModule
  ],
  declarations: [EvaluateComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class EvaluateModule { }
