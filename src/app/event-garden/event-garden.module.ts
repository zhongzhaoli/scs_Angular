import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventGardenRoutingModule } from './event-garden-routing.module';
import { EventGardenComponent } from './event-garden/event-garden.component';

import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    EventGardenRoutingModule,
    HttpClientModule
  ],
  declarations: [EventGardenComponent],
  providers: [
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class EventGardenModule { }
