import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'

declare var $, scs_alert, scs_loading, close_dialog: any;
@Component({
  selector: 'app-integral-shop',
  templateUrl: './integral-shop.component.html',
  styleUrls: ['./integral-shop.component.css']
})
export class IntegralShopComponent implements OnInit {

  constructor(private apise: ApiService) { }

  user: any;
  gift: any;
  gift_type_1: any;
  gift_type_2: any;
  gift_type_3: any;
  show_gift: any;
  jump_url: any;
  show_type: any;
  ngOnInit() {
      this.get_user_sj();
      this.get_sj();
      this.gift_init();
      this.jump_url = environment.url.jump_login;
  }
  back_to_history() {
      window.history.back();
  }
  gift_init(){
      this.gift_type_1 = [];
      this.gift_type_2 = [];
      this.gift_type_3 = [];
      this.show_type = 1;
  }
  list_qh(i){
      //更改active
      $(".gift_list div").map((val,item) => {
          $(item).removeClass("active");
      })
      $(i).addClass("active");
      //更改数据
      let type = $(i).attr("data-type");
      if(type === "1"){
          this.show_gift = this.gift_type_1;
          this.show_type = 1;
      }
      if(type === "2"){
          this.show_gift = this.gift_type_2;
          this.show_type = 2;
      }
      if(type === "3"){
          this.show_gift = this.gift_type_3;
          this.show_type = 3;
      }
  }
  get_sj(){
      scs_loading();
      this.apise.all_gift().subscribe(t => {
         close_dialog();
         this.gift = t;
         this.sj_classify(t);
         this.show_gift = this.gift_type_1;
      },error => {
          close_dialog();
          if(error.status == 401) {
              window.location.href = this.jump_url;
          }
          else {
              scs_alert(error.error.message);
          }
      })
  }
  get_user_sj() {
      this.apise.user_my_integral().subscribe(t => {
         this.user = t;
      },error => {
         scs_alert(error.error.message);
      })
  }
  sj_classify(sj){
      $(sj).map((item,val) => {
          if(val.type == "1" || val.type == "2" || val.type == "3"){
              this.gift_type_1.push(val);
          }
          if(val.type == "4"){
              this.gift_type_2.push(val);
          }
          if(val.type == "5"){
              this.gift_type_3.push(val);
          }
      })
  }
  exchange_voucher(id,integral){
      scs_loading();
      this.apise.exchange_voucher(id).subscribe(t => {
          close_dialog();
          scs_alert(t.message);
          this.user = this.user - integral;
      },error => {
          close_dialog();
          if(error.status == 401) {
              window.location.href = this.jump_url;
          }
          else {
              scs_alert(error.error.message);
          }
      });
  }
    scs_alert(title,val,fun_a){
        $.DialogByZ.Alert({Title: title, Content: val,BtnL:"确定",FunL:fun_a});
    }
  alert_notes(a){
      this.scs_alert("注释",$(a).attr("alt"),close_dialog());
  }
}
