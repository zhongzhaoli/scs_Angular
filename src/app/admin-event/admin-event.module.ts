import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventRoutingModule } from './admin-event-routing.module';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminEventRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminEventComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminEventModule { }
