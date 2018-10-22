import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRecruitmentRoutingModule } from './admin-recruitment-routing.module';
import { AdminRecruitmentComponent } from './admin-recruitment/admin-recruitment.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    AdminRecruitmentRoutingModule
  ],
  declarations: [AdminRecruitmentComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminRecruitmentModule { }
