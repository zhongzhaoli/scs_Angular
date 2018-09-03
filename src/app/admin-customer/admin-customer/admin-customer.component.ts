import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var $, scs_alert, scs_confirm, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

  sj: any;
  ngOnInit() {
    scs_loading();
    this.apise.admin_all_customer().subscribe(t => {
      close_dialog();
      this.sj = t;
    },error => {
      close_dialog();
      this.router.navigate(['/admin-login']);
    });
  }
  back_to_history() {
    window.history.back();
  }
  show_text_div(a){
    $(a).parent().parent().find(".text_div").toggleClass("dis_none");
  }
  an_customer(text,qu_id){
    scs_loading();
    this.apise.admin_an_customer(text,qu_id).subscribe(t => {
      close_dialog();
      this.scs_alert("回答成功",function(){
        window.location.reload();
      });
    },error => {
      close_dialog();
      scs_alert("回答失败");
    })
  }
  alert_personal(a){
    scs_alert("联系人：" + a[0].name + "<br>手机号：" + a[0].phone);
  }
  scs_alert(val,fun_a){
    $.DialogByZ.Alert({Title: "提示", Content: val,BtnL:"确定",FunL:fun_a});
  }
}
