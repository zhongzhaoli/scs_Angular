import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRecruitmentRoutingModule } from './my-recruitment-routing.module';
import { MyRecruitmentComponent } from './my-recruitment/my-recruitment.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    MyRecruitmentRoutingModule,
    HttpClientModule,
  ],
  declarations: [MyRecruitmentComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class MyRecruitmentModule { }
