import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var $, scs_loading, scs_alert, scs_confirm, close_dialog, main_div_height: any;

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj :any;
  type: any;
  ngOnInit() {
    main_div_height();
    //搜索这个兼职ID
    this.search_job_id();
    //初始化
    this.type = "good";
  }
  back_to_history() {
    window.history.back();
  }
  search_job_id() {
    var code = window.location.hash.split("/evaluate/")[1];
    scs_loading();
    this.apise.find_id_job(code).subscribe(t => {
      close_dialog();
      this.sj = t[0];
    }, error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
  upload_text(value,job_id){
    var that = this;
    scs_loading();
    this.apise.enterprise_evaluate(job_id,this.type,value).subscribe(t => {
      close_dialog();
      this.scs_alert_do("谢谢你的评价",function(){
        close_dialog();
        that.router.navigate(['/enterprise-job']);
      });
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
  qh_active(type){
    this.type = type;
    if(type === "good"){
      $(".good").addClass("active");
      $(".bad").removeClass("active");
    }
    else{
      $(".bad").addClass("active");
      $(".good").removeClass("active");
    }
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
