import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterDetailRoutingModule } from './register-detail-routing.module';
import { RegisterDetailComponent } from './register-detail/register-detail.component';
import { ApiService } from '../api.service';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '../http-interceptor/api-interceptor'

@NgModule({
  imports: [
    CommonModule,
    RegisterDetailRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
      RegisterDetailComponent,
  ],
  providers:[
      ApiService,
      { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ]
})
export class RegisterDetailModule { }
