import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';

declare var $, scs_loading, scs_alert, close_dialog: any;

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;

  jump_url: any;
    ngOnInit() {
        this.jump_url = environment.url.jump_login;
        this.get_sj();
  }
  get_sj(){
    scs_loading();
    this.apise.user_my_bill().subscribe(t => {
        close_dialog();
        this.sj = t;
    },error => {
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else{
          scs_alert(error.error.message);
        }
    });
  }
  back_to_history() {
      window.history.back();
  }
}
