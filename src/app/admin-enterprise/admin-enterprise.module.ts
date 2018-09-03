import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEnterpriseRoutingModule } from './admin-enterprise-routing.module';
import { AdminEnterpriseComponent } from './admin-enterprise/admin-enterprise.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'
@NgModule({
  imports: [
    CommonModule,
    AdminEnterpriseRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminEnterpriseComponent],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminEnterpriseModule { }
