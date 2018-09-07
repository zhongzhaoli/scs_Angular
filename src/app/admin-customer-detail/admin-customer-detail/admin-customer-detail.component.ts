import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
declare var $, main_div_height, scs_alert, scs_confirm, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-customer-detail',
  templateUrl: './admin-customer-detail.component.html',
  styleUrls: ['./admin-customer-detail.component.css']
})
export class AdminCustomerDetailComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  user_id: any;
  ngOnInit() {
    this.get_sj();
    main_div_height();
  }
  back_to_history() {
      window.history.back();
  }
  get_sj(){
    let user_id = window.location.hash.split("admin-customer-detail/")[1];
    this.user_id = user_id;
    scs_loading();
    this.apise.admin_show_customer(user_id).subscribe(t => {
      close_dialog();
      this.sj = t;
        setTimeout(() => {
            document.body.scrollTop = document.body.scrollHeight;
        }, 0);
    },error => {
        if(error.status == 401) {
            this.scs_alert_do("您还没登陆",function(){
                window.location.href = this.jump_url;
            })
        }
        else{
            scs_alert(error.error.message);
        }
    });
  }
  an_q(text){
    scs_loading();
    this.apise.admin_an_customer(text,this.user_id).subscribe(t => {
      var an = {
        "text": text,
        "status":"an"
      };
      this.sj.push(an);
        $("input").val("");
        close_dialog();
    },error => {
        if(error.status == 401) {
            this.scs_alert_do("您还没登陆",function(){
                window.location.href = this.jump_url;
            })
        }
        else{
            scs_alert(error.error.message);
        }
    })
  }
  scs_alert_do(b,fun){
      $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
