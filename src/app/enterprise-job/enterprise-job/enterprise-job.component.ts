import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_loading, scs_alert, close_dialog, scs_confirm: any;

@Component({
  selector: 'app-enterprise-job',
  templateUrl: './enterprise-job.component.html',
  styleUrls: ['./enterprise-job.component.css']
})
export class EnterpriseJobComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    scs_loading();
    this.apise.enterprise_job().subscribe(t => {
      close_dialog();
      this.sj = t;
      console.log(this.sj);
    },error => {
      close_dialog();
      scs_alert(error.error.message);
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
        scs_alert(error.error.message);
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
