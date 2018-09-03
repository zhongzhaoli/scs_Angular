import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EnterpriseDetailRoutingModule } from './enterprise-detail-routing.module';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    EnterpriseDetailRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [EnterpriseDetailComponent],
  providers:[
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class EnterpriseDetailModule { }
