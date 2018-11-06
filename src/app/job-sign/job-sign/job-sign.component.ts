import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var $, scs_alert, scs_confirm, scs_loading, close_dialog, main_div_height: any;

@Component({
  selector: 'app-job-sign',
  templateUrl: './job-sign.component.html',
  styleUrls: ['./job-sign.component.css']
})
export class JobSignComponent implements OnInit {

  sj: any;
  sj_num: number;
  job_id: string;
  show_btn_div: boolean;
  constructor(private apise: ApiService, private router: Router) { }

  ngOnInit() {
    this.show_btn_div = true;
    main_div_height();
    scs_loading();
    this.job_id = location.hash.split("/job-sign/")[1];
    this.apise.admin_get_job_sign(this.job_id).subscribe(t => {
      this.sj = t;
      this.sj_num = this.sj.length;
      close_dialog();
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    });
  }
  student_job_sign(i,user_id,type,event) {
      var that = this;
      scs_loading();
      var refuse_ly = "";
      if(type === "refuse"){
          this.scs_confirm_do("请输入拒绝理由","<input type='text' class='form-control refuse_ly'/>",function(){
              refuse_ly = $(".refuse_ly").val();
              that.top_api_fun(i,user_id, type, refuse_ly);
          });
      }
      else{
          that.top_api_fun(i,user_id, type, refuse_ly);
      }

  }
  top_api_fun(i,user_id, type,refuse_ly){
      this.apise.admin_adopt_student_sign_job(user_id, type, this.job_id,refuse_ly).subscribe(t => {
          close_dialog();
          (type === "adopt") ? scs_alert("已同意") : scs_alert("已拒绝");
          this.sj.remove(i);
          this.sj_num = this.sj_num - 1;
      },error => {
          close_dialog();
          scs_alert("未知错误");
      })
  }
  sj_show(type,event){
      if(type === "examine"){
          this.show_btn_div = true;
      }
      else if(type === "adopt" || type === "refuse"){
          this.show_btn_div = false;
      }
      scs_loading();
      $(".btn_div div").each(function (val, item) {
          $(item).removeClass("active");
      });
      $(event).addClass("active");
      this.apise.admin_sign_student_condition(this.job_id,type).subscribe(t => {
          this.sj = t;
          this.sj_num = this.sj.length;
          close_dialog();
      },error => {
          close_dialog();
          this.router.navigate(['/admin-login']);
      });
  }
  back_to_history() {
      window.history.back();
  }
  scs_confirm_do(title ,val, fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
}
