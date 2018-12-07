import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventGardenRoutingModule } from './admin-event-garden-routing.module';
import { AdminEventGardenComponent } from './admin-event-garden/admin-event-garden.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    AdminEventGardenRoutingModule,
    HttpClientModule
  ],
  declarations: [AdminEventGardenComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class AdminEventGardenModule { }
