import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'

declare var $, scs_loading, scs_alert, close_dialog, scs_confirm: any;

@Component({
  selector: 'app-enterprise-job',
  templateUrl: './enterprise-job.component.html',
  styleUrls: ['./enterprise-job.component.css']
})
export class EnterpriseJobComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;

  jump_url: any;
    ngOnInit() {
    scs_loading();
    this.jump_url = environment.url.jump_login;
    this.apise.enterprise_job().subscribe(t => {
      close_dialog();
      this.sj = t;
    },error => {
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else {
            scs_alert(error.error.message);
        }
    })
  }
  back_to_history() {
    window.history.back();
  }
  job_over(job_id){
    var that = this;
    this.scs_confirm("提示","是否要完结此兼职？",function(){
      close_dialog();
      scs_loading();
      that.apise.enterprise_job_over(job_id).subscribe(t => {
        close_dialog();
        that.scs_alert_do("恭喜，此兼职已完结",function(){
          window.location.reload();
        });
      },error => {
          close_dialog();
          if(error.status == 401) {
              window.location.href = this.jump_url;
          }
          else {
              scs_alert(error.error.message);
          }
      })
    })
  }
  scs_confirm(title,val,fun_a){
    $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
