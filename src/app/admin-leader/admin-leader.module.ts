import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLeaderRoutingModule } from './admin-leader-routing.module';
import { AdminLeaderComponent } from './admin-leader/admin-leader.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminLeaderRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminLeaderComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminLeaderModule { }
