import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var $, scs_loading, scs_alert, scs_confirm, close_dialog, main_div_height: any;

@Component({
  selector: 'app-admin-over-money',
  templateUrl: './admin-over-money.component.html',
  styleUrls: ['./admin-over-money.component.css']
})
export class AdminOverMoneyComponent implements OnInit {

  constructor(private apise: ApiService,private router:Router) { }

  job_id: any;
  sj: any;
  user_money_arr: any;
  jump_url: any;
  ngOnInit() {
    this.user_money_arr = {};
    this.job_id = window.location.hash.split("/admin-over-money/")[1];
    this.get_sj();
    this.jump_url = environment.url.jump_login;
  }
  back_to_history() {
      window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.admin_over_money(this.job_id).subscribe(t => {
      close_dialog();
      this.sj = t[0];
      for(let a in t[0].student){
          if(a != "remove"){
              let student = t[0].student[a];
              this.user_money_arr[student.user_id] = t[0].admin_change_money * t[0].job_hour;
          }
      }
      console.log(this.user_money_arr);
      setTimeout(() => {
          main_div_height();
      },0)
    },error => {
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
          }
          else if(error.status == 412){
              this.router.navigate(["/admin-login"])
          }
          else{
              scs_alert(error.error.message);
        }
    })
  }
  over_job(leader_user_id){
      if($(".place textarea").val() == ""){
          scs_alert("学生领取薪酬地址或方式不能为空");
          return;
      }
      $("input[type='number']").map((val,item) => {
          this.user_money_arr[item.id] = item.value;
      });
      this.apise.admin_over_job(this.job_id,this.user_money_arr,$(".place textarea").val(),leader_user_id,$("[name='type']").val()).subscribe(t => {
          scs_alert("完结成功");
      },error => {
        if(error.status == 401) {
            window.location.href = this.jump_url;
          }
          else if(error.status == 412){
              this.router.navigate(["/admin-login"])
          }
          else{
              scs_alert(error.error.message);
        }
      });
  }
}
