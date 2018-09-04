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

  job: any;
  student: any;
  type: any;
  user_type_good: any;
  user_type_bad: any;
  user_type_review: any;
  ngOnInit() {
    main_div_height();
    //搜索这个兼职ID
    this.search_job_id();
    //初始化
    this.type = "good";
    this.user_type_good = [];
    this.user_type_bad = [];
    this.user_type_review = [];
  }
  back_to_history() {
    window.history.back();
  }
  search_job_id() {
    var code = window.location.hash.split("/evaluate/")[1];
    scs_loading();
    this.apise.enterprise_all_student(code).subscribe(t => {
      close_dialog();
      this.job = t[0];
      this.student = t[1];
      for(let i = 0; i < this.student.length; i++){
        this.user_type_good.push(this.student[i].user_id);
      }
    }, error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
  upload_text(value,job_id){
    var that = this;
    scs_loading();
    this.apise.enterprise_evaluate(job_id,this.type,value,this.user_type_good,this.user_type_bad,this.user_type_review).subscribe(t => {
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
  qh_active(type,i){
    this.type = type;
    this.type_qh(type,i)
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
  type_for_children(type,user_id,i){
    this.type_qh(type,i);
    if(type === "good"){
        this.user_type_good.push(user_id);
        this.user_type_bad.remove(user_id);
        this.user_type_review.remove(user_id);
    }
    else if(type === 'bad'){
        this.user_type_good.remove(user_id);
        this.user_type_bad.push(user_id);
        this.user_type_review.remove(user_id);
    }
    else{
        this.user_type_good.remove(user_id);
        this.user_type_bad.remove(user_id);
        this.user_type_review.push(user_id);
    }
  }
  type_qh(type,i){
      if(type === "good"){
          $(i).parent().find(".good").addClass("active");
          $(i).parent().find(".bad").removeClass("active");
          $(i).parent().find(".review").removeClass("active");
      }
      else if(type === "bad"){
          $(i).parent().find(".bad").addClass("active");
          $(i).parent().find(".good").removeClass("active");
          $(i).parent().find(".review").removeClass("active");
      }
      else{
          $(i).parent().find(".review").addClass("active");
          $(i).parent().find(".good").removeClass("active");
          $(i).parent().find(".bad").removeClass("active");
      }
  }
}
