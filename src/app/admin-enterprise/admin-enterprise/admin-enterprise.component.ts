import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var $,main_div_height,scs_alert,scs_confirm, close_dialog, scs_loading: any;

@Component({
  selector: 'app-admin-enterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css']
})
export class AdminEnterpriseComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) {
  }
  sj: any;
  show: any;
  show_num: any;
  show_btn_div: boolean;
  now_list_name: string;
  jump_url: any;

  ngOnInit() {
    main_div_height();
    this.get_all();
    this.jump_url = environment.url.jump_login;
  }
  back_to_history() {
    window.history.back();
  }
  get_all(){
    scs_loading();
    this.show_btn_div = true;
    this.now_list_name = "examine";
    this.apise.admin_all_enterprise().subscribe(t => {
      this.sj = JSON.parse(JSON.stringify(t));
      this.show = JSON.parse(JSON.stringify(t));
      this.show_num = this.show.length;
      close_dialog();
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
    });
  }
  new_api_array(a, b) {
    this.show = [];
    scs_loading();
    if (a === "examine") {
      this.get_all();
    }
    else {
      if (a == "adopt" || a == "refuse") {
        this.show_btn_div = false;
        if (a == "adopt") {
          this.now_list_name = "adopt";
        }
        else {
          this.now_list_name = "refuse";
        }
      }
      else {
        this.show_btn_div = true;
      }
      this.apise.enterprise_condition({"condition": a, "value": b}).subscribe(t => {
        this.show = t;
        this.show_num = this.show.length;
        close_dialog();
      }, error => {
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
  sj_show(a, b, c) {
    $(".btn_div div").each(function (val, item) {
      $(item).removeClass("active");
    });
    $(c).addClass("active");
    this.new_api_array(a, b);
  }
  examine(a, b, c,i) {
    scs_loading();
    if (a === "ok") {
      scs_loading();
      this.apise.enterprise_access_api(b[0]).subscribe(t => {
        close_dialog();
        scs_alert("审核已通过");
        this.sj.remove(i);
        this.show.remove(i);
        this.show_num = this.show_num - 1;
      }, error => {
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
    else {
      this.apise.enterprise_refuse_api(b[0]).subscribe(t => {
        close_dialog();
        scs_alert("审核已拒绝");
        this.sj.remove(i);
        this.show.remove(i);
        this.show_num = this.show_num - 1;
      }, error => {
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
  }
}
