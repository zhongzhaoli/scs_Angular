import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { Router } from '@angular/router';
declare var $, main_div_height, scs_alert, scs_confirm, scs_loading, close_dialog: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

  ngOnInit() {
      main_div_height();
  }
  send_qu(text){
    scs_loading();
    var that = this;
    this.apise.send_qu(text).subscribe(t => {
      close_dialog();
      this.scs_alert_do("提交成功",function(){
        close_dialog();
        that.router.navigate(['/my-customer']);
      });
    });
  }
  back_to_history() {
    window.history.back();
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
