import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

declare var $, scs_loading, scs_alert: any;
@Component({
  selector: 'app-admin-send-numerical',
  templateUrl: './admin-send-numerical.component.html',
  styleUrls: ['./admin-send-numerical.component.css']
})
export class AdminSendNumericalComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  user: any;
  user_arr: any;
  ngOnInit() {
    this.user_arr = [];
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
  user_arr_fun(i,user_id){
    if(i.checked){
      this.user_arr.push(user_id);
    }
    else{
      this.user_arr.remove(user_id);
    }
  }
  upload(){
      let credit = $("[data-credit]").val();
      let integral = $("[data-integral]").val();
      let experience = $("[data-experience]").val();
      this.apise.admin_send_user_numerical(this.user_arr,credit,integral,experience).subscribe(t => {
        scs_alert("提交成功");
      },error => {
        scs_alert("失败");
      })
  }
}
