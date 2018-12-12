import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {environment} from "../../../environments/environment";
declare var $, scs_alert, close_dialog, scs_loading, wx_friend_fx, wx_pengyou_fx: any;

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  sj_length: any;
  url: any;
  ngOnInit() {
    this.url = environment.url.jump_login;
    wx_friend_fx("云屯务集-失物招领","失物招领是云屯务集其中的一个模块，在这里你可以发布你遗失的东西或是捡到的东西，帮助你更快解决燃眉之急。");
    wx_pengyou_fx("云屯务集-失物招领");
  }
  get_sj(){
    scs_loading();
    this.apise.get_recruit().subscribe(t => {
      close_dialog();
      this.sj = t;
      if(this.sj.length == ""){
        this.sj_length = 0;
      }
      else{
        this.sj_length = this.sj.length;
      }
      for(var i in this.sj) {
          if(i === "remove"){
            return;
          }
          this.sj[i].img_list = JSON.parse(this.sj[i].img_list);
      }
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    })
  }
  back_to_history() {
      window.history.back();
  }
  loading_2_load(){
    this.get_sj();
  }
  img_onload(a){
    if($(a).attr("data-load") === "1"){
      return;
    }
    else{
      a.src = a.id;
      $(a).attr("data-load","1");
      $(a).parent()[0].style.background = "black";
    }
  }
  call_me_alert(a){
    scs_loading();
    this.apise.is_login().subscribe(t => {
      close_dialog();
      // scs_alert('手机号：' + a);
      let c = $("<a href='tel:"+ a +"'>"+a+"</a>").appendTo($("body"));
      c[0].click();
      $(c).remove();
    },error => {
      close_dialog();
      let that = this;
      this.scs_alert_do("提示","请先登录",function(){
        window.location.href = that.url;
      });
    });
  }
  asd(a){
    $(a).parent().parent().viewer({"toolbar": false, "title": false, "navbar": false, "movable": false, "transition": false});
  }
  scs_alert_do(title_v ,val, fun_a){
    $.DialogByZ.Alert({Title: title_v, Content: val,BtnL:"确定",FunL:fun_a});
  }
  type_change(a){
    scs_loading();
    this.apise.recruitment_condition(a.value).subscribe(t => {
      close_dialog();
      this.sj = t;
      if(this.sj.length == ""){
        this.sj_length = 0;
      }
      else{
        this.sj_length = this.sj.length;
      }
      for(var i in this.sj) {
          if(i === "remove"){
            return;
          }
          this.sj[i].img_list = JSON.parse(this.sj[i].img_list);
      }
    });
  }
}
