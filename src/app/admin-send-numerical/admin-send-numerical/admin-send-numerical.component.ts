import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

declare var $, scs_loading, scs_alert, getCookie: any;
@Component({
  selector: 'app-admin-send-numerical',
  templateUrl: './admin-send-numerical.component.html',
  styleUrls: ['./admin-send-numerical.component.css']
})
export class AdminSendNumericalComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  user: any;
  user_arr: any;
  choose_user_arr: any;
  jump_url: any;
  ngOnInit() {
    this.jump_url = environment.url.jump_login;
    if(getCookie('role') != 'admin'){
      this.router.navigate(['/admin-login']);
    }
    this.user_arr = [];
    this.choose_user_arr = [];
  }
  back_to_history() {
      window.history.back();
  }
  phone_change(a){
    let input_val = a.value;
    this.apise.admin_phone_get_user(input_val).subscribe(t => {
      this.user = t;
    },error => {
      this.router.navigate(['/admin-login']);
    })
  }
  user_del_fun(i,user_id,a){
    this.user_arr.remove(user_id);
    this.choose_user_arr.remove(a);
  }
  user_arr_fun(i,user_id,a){
      if(this.user_arr.indexOf(user_id) != -1){
        scs_alert("不能添加同一个学生");
      }
      else {
          this.user_arr.push(user_id);
          this.choose_user_arr.push(a);
      }
  }
  upload(){
      let credit = $("[data-credit]").val();
      let integral = $("[data-integral]").val();
      let experience = $("[data-experience]").val();
      this.apise.admin_send_user_numerical(this.user_arr,credit,integral,experience).subscribe(t => {
        scs_alert("提交成功");
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
      })
  }
}
