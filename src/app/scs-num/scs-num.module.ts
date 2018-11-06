import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScsNumRoutingModule } from './scs-num-routing.module';
import { ScsNumComponent } from './scs-num/scs-num.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    ScsNumRoutingModule,
    HttpClientModule
  ],
  declarations: [ScsNumComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class ScsNumModule { }
