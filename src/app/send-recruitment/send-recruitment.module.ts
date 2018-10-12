import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SendRecruitmentRoutingModule } from './send-recruitment-routing.module';
import { SendRecruitmentComponent } from './send-recruitment/send-recruitment.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    SendRecruitmentRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [SendRecruitmentComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class SendRecruitmentModule { }
