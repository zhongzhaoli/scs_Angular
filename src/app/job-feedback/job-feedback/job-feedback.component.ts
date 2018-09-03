import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';


declare var $, scs_alert, scs_loading, close_dialog, main_div_height: any;

@Component({
  selector: 'app-job-feedback',
  templateUrl: './job-feedback.component.html',
  styleUrls: ['./job-feedback.component.css']
})
export class JobFeedbackComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

  job_id: any;
  sj: any;
  job_title: any;

  ngOnInit() {
    main_div_height();
    scs_loading();
    this.job_id = location.hash.split("/job-feedback/")[1];
    this.apise.find_id_job(this.job_id).subscribe(t => {
      close_dialog();
      this.sj = t[0];
      this.job_title = t[0].job_title;
    },error => {
      close_dialog();
      scs_alert("获取数据失败");
    });
  }
  back_to_history() {
    window.history.back();
  }
  upload_text(a){
    scs_loading();
    this.apise.job_feedback(this.job_id,a,this.job_title).subscribe(t => {
      close_dialog();
      var that = this;
      this.scs_alert("反馈成功",function(){
        close_dialog();
        that.router.navigate(['/my-job']);
      });
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    });
  }
  scs_alert(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
