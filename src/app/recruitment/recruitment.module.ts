import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentComponent } from './recruitment/recruitment.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ],
  declarations: [RecruitmentComponent]
})
export class RecruitmentModule { }
