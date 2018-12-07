import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'
declare var $, scs_loading, scs_alert, main_div_height, close_dialog, QRCode: any;

@Component({
  selector: 'app-my-voucher',
  templateUrl: './my-voucher.component.html',
  styleUrls: ['./my-voucher.component.css']
})
export class MyVoucherComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  jump_url: any;
  user_id: any;
  type_sj_1: any;
  type_sj_2: any;
  type_sj_3: any;
  type_sj_4: any;
  type_sj_5: any;
  ngOnInit() {
      this.jump_url = environment.url.jump_login;
      this.get_sj();
      main_div_height();
      this.type_sj_init();
  }
  back_to_history() {
      window.history.back();
  }
  type_sj_init(){
      this.type_sj_1 = [];
      this.type_sj_2 = [];
      this.type_sj_3 = [];
      this.type_sj_4 = [];
      this.type_sj_5 = [];
  }
  get_sj(){
    scs_loading();
    this.apise.user_my_voucher().subscribe(t => {
        close_dialog();
        this.sj = t;
        this.sj_classify(this.sj);
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
  sj_classify(sj){
      $(sj).map((item,val) => {
          if(val.type == "1"){
              this.type_sj_1.push(val);
          }
          if(val.type == "2"){
              this.type_sj_2.push(val);
          }
          if(val.type == "3"){
              this.type_sj_3.push(val);
          }
          if(val.type == "4"){
              this.type_sj_4.push(val);
          }
          if(val.type == "5"){
              this.type_sj_5.push(val);
          }
      })
  }
  scs_alert(title,val){
      $.DialogByZ.Alert({Title: title, Content: val,BtnL:"确定",FunL:close_dialog()});
  }
  use_vo(vou_id){
      scs_loading();
      $("#qrcode").html("");
      this.apise.find_examine_user().subscribe(t => {
              close_dialog();
          this.user_id = t.o_user.id;
          let qrcode = new QRCode(document.getElementById("qrcode"), {
              width : 100,
              height : 100
          });
          qrcode.makeCode("https://www.yuntunwj.com/#/admin-exchange/" + vou_id + "/user/" + this.user_id);
          setTimeout(() => {
            let base64 = $("#qrcode").find("img")[0].src;
            this.scs_alert("<span>请持二维码到（深圳技师学院）天工楼301领取</span>","<img src="+ base64 +">");
          },0)
      })
  }
}
