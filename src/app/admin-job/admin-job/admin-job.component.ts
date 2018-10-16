import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var $,main_div_height,scs_alert ,scs_confirm, close_dialog, scs_loading, main_div_height: any;

@Component({
  selector: 'app-admin-job',
  templateUrl: './admin-job.component.html',
  styleUrls: ['./admin-job.component.css']
})
export class AdminJobComponent implements OnInit {

  sj: any;
  show_btn_div: number;
  sj_num: number;
  change_money: number;

  constructor(private apise: ApiService, private router: Router) { }

  ngOnInit() {
    scs_loading();
    main_div_height();
    this.show_btn_div = 0;
    this.get_examine_job();
  }
  get_examine_job(){
    this.apise.admin_examine_job().subscribe(t => {
        close_dialog();
        this.sj = t;
        this.sj_num = this.sj.length;
        $(".admin_main_div")[0].style.background = "#fff";
    },error => {
        close_dialog();
        this.router.navigate(['/admin-login']);
    })
  }
  examine(type,jobid,event,ii){
    var that = this;
    if(type == "ok"){
      this.scs_alert_do("修改每天薪酬","<input type='number' data-money class='form-control'>",function(){
        if(!isNaN($("[data-money]").val() / 2) && $("[data-money]").val() !=""){
            that.change_money = $("[data-money]").val();
            that.scs_confirm_do("金额","确认以一天<span style='color:red'>"+that.change_money+"</span>元发布此兼职吗？",function(){
                that.apise.admin_get_leader().subscribe(t => {
                    var a = "";
                    for(var i in t){
                        if(i === "remove"){ //base.js 添加了一个Array 附加function 出现了这个问题。原因暂时未知
                            continue;
                        }
                        a += "<option value = " + t[i].id + ">"+ t[i].user.name +"</option>";
                    }
                    that.scs_confirm_do("领队人","<select class='form-control leader_select'>" + a + "</select>",function(){
                        that.apise.admin_access_job(jobid,that.change_money,$(".leader_select").val()).subscribe(t => {
                            scs_alert("审核已通过");
                            that.sj.remove(ii);
                            that.sj_num = that.sj_num - 1;
                        },error => {
                            scs_alert("审核出现问题");
                        });
                        close_dialog();
                    })
                },error => {
                    scs_alert("获取领队人失败");
                });
            });
        }
        else{
          scs_alert("输入的薪酬不合法");
        }
      });
    }
    else{
        that.scs_confirm_do("","确定不通过审核吗？",function(){
          that.apise.admin_refuse_job(jobid).subscribe(t => {
              scs_alert("审核已拒绝");
              that.sj.remove(ii);
              that.sj_num = that.sj_num - 1;
          },error => {
              scs_alert("审核出现问题");
          })
          close_dialog();
        });
    }
  }
  sj_show(type,event){
      if(type === "examine"){
          this.show_btn_div = 0;
      }
      else if(type === "adopt"){
          this.show_btn_div = 1;
      }
      else{
          this.show_btn_div = 2;          
      }
      scs_loading();
      $(".btn_div div").each(function (val, item) {
          $(item).removeClass("active");
      });
      $(event).addClass("active");
      this.apise.admin_condition_job(type).subscribe(t => {
          this.sj = t;
          this.sj_num = this.sj.length;
          close_dialog();
      },error => {
          this.router.navigate(['/admin-login']);
      });
  }

  scs_alert_do(title_v ,val, fun_a){
      $.DialogByZ.Alert({Title: title_v, Content: val,BtnL:"确定",FunL:fun_a});
  }
  scs_confirm_do(title ,val, fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  back_to_history() {
      window.history.back();
  }
}
