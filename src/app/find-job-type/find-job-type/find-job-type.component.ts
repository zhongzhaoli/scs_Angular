import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var jump_login, scs_alert, close_dialog, $, scs_loading, wx_friend_fx, wx_pengyou_fx: any;

@Component({
  selector: 'app-find-job-type',
  templateUrl: './find-job-type.component.html',
  styleUrls: ['./find-job-type.component.css']
})
export class FindJobTypeComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

  job: any;
  job_length: any;

  type_arr: any;
  ngOnInit() {
    //初始化类型数组
    this.init_type_arr();
    //获取url参数改变select
    this.url_change_select();
  }
  url_change_select(){
    var code = window.location.hash.split("/find-job-type/")[1];
    $("select").val(code);
    this.type_sj(this.type_arr[code]);
  }
  type_change(i){
    var type = i.value;
    if(type === "all"){
      this.router.navigate(['/find-job']);
    }
    else {
      this.router.navigate(['/find-job-type/' + type]);
      this.type_sj(this.type_arr[type]);
    }
  }
  type_sj(type){
      var that = this;
      this.job = "";
      this.job_length = "";
      scs_loading();
      this.apise.find_type_job(type).subscribe(t => {
          this.job = t;
          this.job_length = (this.job.length) ? this.job.length : "none";
          wx_friend_fx("云屯务集-兼职列表","在这里你可以找到适合自己的兼职。");
          wx_pengyou_fx("云屯务集-兼职列表");
          close_dialog();
      },error => {
          scs_alert(error.error.message);
      })
  }
  init_type_arr(){
    this.type_arr = {
      "all": "全部类型",
      "ceremony": "礼仪/模特",
      "host": "主持人",
      "plan": "活动策划",
      "extension": "推广/派单",
      "sale": "销售/促销",
      "investigation": "市场/问卷调查",
      "tutor": "助教/家教",
      "agent": "校园代理",
      "waiter": "服务生",
      "other": "其他"
    }
  }
}
