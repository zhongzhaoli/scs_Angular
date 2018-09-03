import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
declare var $,setCookie, delCookie, main_div_height, scs_alert, scs_loading, close_dialog:any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  ngOnInit() {
      main_div_height();
  }
  login(username,password){
      scs_loading();
      this.apise.admin_login({"phone":username,"password":password}).subscribe(t => {
          close_dialog();
          delCookie("api_token");
          delCookie("role");
          setCookie("api_token",t.success.token);
          setCookie("role","admin");
          this.router.navigate(['/profile']);
      },error => {
          close_dialog();
          scs_alert(error.error.message);
      })
  }
}
