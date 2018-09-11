import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';
declare var $, scs_alert, scs_loading, close_dialog, getCookie: any;

@Component({
  selector: 'app-admin-exchange',
  templateUrl: './admin-exchange.component.html',
  styleUrls: ['./admin-exchange.component.css']
})
export class AdminExchangeComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj: any;
  jump_url:  any;
  success: boolean;
  error_text: any;
  ngOnInit() {
      this.success = false;
    this.jump_url = environment.url.jump_login;
    this.get_sj();
    let role = getCookie("role");
    if(role != "admin"){
      this.router.navigate(['/admin-login']);
    }
  }
  get_sj(){
    scs_loading();
    let vou_id = window.location.hash.split("/admin-exchange/")[1].split("/user/")[0]
    let user_id = window.location.hash.split("/user/")[1];
    this.apise.admin_exchange_user(vou_id,user_id).subscribe(t => {
        close_dialog();
        this.sj = t[0];
    },error => {
      close_dialog();
      if(error.status == 401){
         window.location.href = this.jump_url;
      }
      else{
         this.error_text = error.error.message;
      }
    })
  }
  admin_exchange(vo_id,user_id){
    scs_loading();
    this.apise.admin_exchange_code(user_id).subscribe(t => {
        close_dialog();
        this.yz_code(vo_id,user_id);
    },error => {
        close_dialog();
        if(error.status == 401){
            window.location.href = this.jump_url;
        }
        else{
            scs_alert(error.error.message);
        }
    })
  }
  scs_confirm_do(title ,val, fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  scs_alert_do(title_v ,val, fun_a){
      $.DialogByZ.Alert({Title: title_v, Content: val,BtnL:"确定",FunL:fun_a});
  }
  yz_code(vo_id,user_id){
    let that = this;
    this.scs_confirm_do("输入用户收到的验证码","<input type='password' class='form-control' id='user_code'>",function(){
        scs_loading();
        that.apise.admin_exchange_yz_code({"vou_id":vo_id,"code":$("#user_code").val()},user_id).subscribe(t => {
            close_dialog();
            that.scs_alert_do("提示","领取成功",function(){
                that.success = true;
            });
        },error => {
            close_dialog();
            scs_alert(error.error.message + "，两分钟内验证码不会改变");
        })
    })
  }
}
