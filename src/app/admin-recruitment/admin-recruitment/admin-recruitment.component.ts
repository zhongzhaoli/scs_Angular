import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
declare var $, scs_loading, close_dialog, scs_alert: any;

@Component({
  selector: 'app-admin-recruitment',
  templateUrl: './admin-recruitment.component.html',
  styleUrls: ['./admin-recruitment.component.css']
})
export class AdminRecruitmentComponent implements OnInit {

  constructor(private apise: ApiService, private router:Router) { }

  sj:any;
  sj_length: any;

  ngOnInit() {
    this.get_sj();
  }
  back_to_history() {
    window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.admin_my_recruit().subscribe(t => {
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
      this.router.navigate(['/admin-login']);
    })
  }
  del(id,a){
    scs_loading();
    this.apise.admin_del_recruit(id).subscribe(t => {
      close_dialog();
      scs_alert("删除成功");
      this.sj.remove(a);
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
  to_scs(id){
     let that = this;
     this.scs_confirm_do("提示","确认已转交至301",function(){
        scs_loading();
        that.apise.admin_to_scs(id).subscribe(t => {
          close_dialog();
          scs_alert("已转交");
        },error => {
          close_dialog();
          scs_alert(error.error.message);
        })
     })
  }
  over(id,i){
    scs_loading();
    this.apise.admin_over_recruit(id).subscribe(t => {
      close_dialog();
      scs_alert("已成功");
    },error => {
      close_dialog();
      scs_alert(error.error.message);  
    })
  }
  scs_alert_do(title_v ,val, fun_a){
    $.DialogByZ.Alert({Title: title_v, Content: val,BtnL:"确定",FunL:fun_a});
  }
  scs_confirm_do(title ,val, fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  asd(a){
    $(a).parent().parent().viewer({"toolbar": false, "title": false, "navbar": false});
  }
}
