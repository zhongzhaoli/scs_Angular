import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'

declare var $, main_div_height, scs_alert, scs_loading, close_dialog: any;

@Component({
  selector: 'app-credit-user',
  templateUrl: './credit-user.component.html',
  styleUrls: ['./credit-user.component.css']
})
export class CreditUserComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;

  jump_url: any;
    ngOnInit() {
        this.jump_url = environment.url.jump_login;
        this.my_credit();
  }
  back_to_history() {
      window.history.back();
  }
  my_credit(){
      scs_loading();
      this.apise.user_enterprise_my_credit().subscribe(t => {
        close_dialog();
        this.sj = t;
        setTimeout(() => {
            main_div_height();
            $(".credit_color_div")[0].style.height = this.sj.credit + "%";
        },0);
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
}