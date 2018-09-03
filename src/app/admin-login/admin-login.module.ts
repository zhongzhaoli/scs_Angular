import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApiService } from '../api.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
      HttpClientModule
  ],
  declarations: [AdminLoginComponent],
  providers:[
      ApiService,
  ]
})
export class AdminLoginModule { }
