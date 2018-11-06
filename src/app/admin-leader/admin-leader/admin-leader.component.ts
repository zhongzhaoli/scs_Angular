import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';

declare var $, main_div_height, scs_loading, close_dialog, scs_alert, scs_loading: any;

@Component({
  selector: 'app-admin-leader',
  templateUrl: './admin-leader.component.html',
  styleUrls: ['./admin-leader.component.css']
})
export class AdminLeaderComponent implements OnInit {

  sj: any;
  want_add_sj :any;
  jump_url: any;
  constructor(private apise: ApiService, private router: Router) { }

  ngOnInit() {
      main_div_height();
      this.get_leader();
      this.jump_url = environment.url.jump_login;
  }
  get_leader(){
      scs_loading();
      this.apise.admin_get_leader().subscribe(t => {
          this.sj = t;
          close_dialog();
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
      });
  }
  add_leader(){
      var that = this;
      this.scs_confirm_do("输入领队人账号（手机号）","<input type='number' data-username class='form-control'>",function() {
          scs_loading();
          that.apise.admin_user_leader($("[data-username]").val()).subscribe(t => {
              close_dialog();
              that.want_add_sj = t[0];
              that.scs_confirm_do("提示","确定要添加领队人<span style='color:red'>" + t[0].name + "</span>吗？",function(){
                  close_dialog();
                  scs_loading();
                  that.apise.admin_create_leader(t[0].user_id).subscribe(t => {
                      close_dialog();
                      var a = {"user":"","user_id":""};
                      a.user = that.want_add_sj;
                      a.user_id = that.want_add_sj.user_id;
                      that.sj.push(a);
                      console.log(that.sj);
                  },error => {
                    close_dialog();
                    if(error.status == 401) {
                        window.location.href = that.jump_url;
                    }
                    else if(error.status == 412){
                        that.router.navigate(["/admin-login"])
                    }
                    else{
                        scs_alert(error.error.message);
                    }
                  })
              });
          },error => {
            if(error.status == 401) {
                window.location.href = that.jump_url;
            }
            else if(error.status == 412){
                that.router.navigate(["/admin-login"])
            }
            else{
                scs_alert(error.error.message);
            }
          })
      });
  }
  scs_alert_do(a,b,fun_a){
      $.DialogByZ.Alert({Title: a, Content: b,BtnL:"确定",FunL:fun_a});
  }
  scs_confirm_do(title,val,fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()});
  }
  back_to_history() {
      window.history.back();
  }
}
