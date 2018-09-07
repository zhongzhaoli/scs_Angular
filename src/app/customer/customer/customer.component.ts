import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

declare var $, main_div_height, scs_alert, scs_confirm, scs_loading, close_dialog: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

    sj:any;
    jump_url: any;
    ngOnInit() {
        this.get_sj();
        this.jump_url = environment.url.jump_login;
        main_div_height();
  }
  send_qu(text){
    scs_loading();
    var that = this;
    this.apise.send_qu(text).subscribe(t => {
        close_dialog();
        var new_data = {
            "text":text,
            "status": "qu"
        }
        this.sj.push(new_data);
        $("input").val("");
        setTimeout(() => {
            $("html").get(0).scrollTop = $("html").get(0).scrollHeight;
        },0)
    },error => {
        close_dialog();
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
  get_sj(){
        scs_loading();
        this.apise.my_customer().subscribe(t => {
            close_dialog();
            this.sj = t;
            setTimeout(() => {
                $("html").get(0).scrollTop = $("html").get(0).scrollHeight;
            }, 0);
        },error => {
            close_dialog();
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
  back_to_history() {
    window.history.back();
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
