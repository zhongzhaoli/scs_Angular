import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var $,main_div_height,scs_alert,scs_confirm, close_dialog, scs_loading: any;

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

    sj: any;
    show: any;
    show_num: any;
    show_btn_div: boolean;
    now_list_name: string;
    search_type: string;
    jump_url: any;

    constructor(private apise: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.jump_url = environment.url.jump_login;
        main_div_height();
        this.all_sj();
        this.search_type = "all";
    }

    all_sj() {
        scs_loading();
        this.show_btn_div = true;
        this.now_list_name = "examine";
        this.apise.admin().subscribe(t => {
            this.sj = JSON.parse(JSON.stringify(t));
            this.show = JSON.parse(JSON.stringify(t));
            this.show_num = this.show.length;
            close_dialog();
            $(".have_sj_div").show();
            $(".admin_main_div")[0].style.background = "#fff";
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
        })
    }

    sj_show(a, b, c) {
        $(".btn_div div").each(function (val, item) {
            $(item).removeClass("active");
        });
        $(c).addClass("active");
        this.new_api_array(a, b);
    }

    examine(a, b, c, i) {
        scs_loading();
        if (a === "ok") {
            scs_loading();
            this.apise.user_access_api(b[0]).subscribe(t => {
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
            this.apise.user_refuse_api(b[0]).subscribe(t => {
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

    new_api_array(a, b) {
        this.show = [];
        scs_loading();
        if (a === "examine") {
            this.all_sj();
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
            this.apise.user_condition({"condition": a, "value": b}).subscribe(t => {
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

    search_click_btn(val) {
        this.search_type_change();
        scs_loading();
        this.show = [];
        this.apise.admin_search(this.now_list_name,val,this.search_type).subscribe(t => {
            this.show = t;
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
            close_dialog();
        })
    }
    search_type_change(){
        this.search_type = $("[name='select_search_type']").val();
    }
    back_to_history() {
        window.history.back();
    }
}
