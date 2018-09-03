import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';

declare var jump_login, show_cj_div, $, close_dialog, closeTailor, scs_alert, scs_loading, map_do: any;

@Component({
  selector: 'app-send-job',
  templateUrl: './send-job.component.html',
  styleUrls: ['./send-job.component.css']
})
export class SendJobComponent implements OnInit {

  job_title: any;
  job_introduce: any;
  job_num: any;
  job_type: any;
  job_start_date: any;
  job_start_time: any;
  job_end_date: any;
  job_hour: any;
  job_rest: any;
  job_money: number;
  job_detail_time: any;
  job_detail_content: any;
  job_detail_subsidy: any;
  job_remarks:any;
  balance_type: string;
  job_detail_place: string;

  role: string;
  url: any;
  constructor(private apise: ApiService,private router: Router) { }

    ngOnInit() {
      map_do();
      this.get_now_date_time();
      this.sj_init();
      this.get_role();
      $(".send_div").hide();
      scs_loading();
    }

    get_role(){
        this.apise.get_user_role().subscribe(t => {
            $(".send_div").show();
            close_dialog();
            this.role = t.role;
        },error => {
            this.router.navigate(['/login']);
        });
    }
    sj_init(){
        this.job_type = "礼仪/模特";
        this.job_hour = "1";
        this.job_rest = "1";
        this.balance_type = "日结";
    }

    get_now_date_time(){
        var a = new Date();
        //获取日期
        var mo = ((a.getMonth() + 1) < 10) ? "0" + (a.getMonth() + 1) : (a.getMonth() + 1);
        var da = (a.getDate() < 10) ? "0" + a.getDate() : a.getDate();
        var date_ = a.getFullYear() + "-" + mo + "-" + da;
        //获取时间
        var ho = (a.getHours() < 10) ? "0" + a.getHours() : a.getHours();
        var min = (a.getMinutes() < 10) ? "0" + a.getMinutes() : a.getMinutes();
        var time_ = ho + ":" + min;
        this.job_start_date = date_;
        this.job_end_date = date_;
        this.job_start_time = time_;
    }
    send_job(){
        var that = this;
        scs_loading();
        var a = {
            "job_title": this.job_title,
            "job_introduce": this.job_introduce,
            "job_num": this.job_num,
            "job_type": this.job_type,
            "job_place": $(".job_place").val(),
            "job_start_date": this.job_start_date,
            "job_start_time": this.job_start_time,
            "job_end_date": this.job_end_date,
            "job_rest":this.job_rest,
            "job_hour": this.job_hour,
            "job_money": this.job_money,
            "job_detail_time": this.job_detail_time,
            "job_detail_content": this.job_detail_content,
            "job_detail_subsidy": this.job_detail_subsidy,
            "job_remarks": this.job_remarks,
            "balance_type": this.balance_type,
            "job_detail_place": this.job_detail_place,
            "latitude_longitude": $(".jwd").val(),
        }
        $("[data-error]").html("");
        this.apise.send_job(a).subscribe(t => {
            this.scs_alert_do("兼职已提交审核",function(){
                that.router.navigate(['/profile']);
                close_dialog();
            });
        },error => {
            if(error.error.message){
                scs_alert(error.error.message);
                return;
            }
            close_dialog();
            scs_alert("填写信息有误");
            var error = error.error;
            for (var i in error) {
                $("[data-error=" + i + "]").html(error[i][0]);
            }
        })
    }
    scs_alert_do(b,fun){
        $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
    }
}
