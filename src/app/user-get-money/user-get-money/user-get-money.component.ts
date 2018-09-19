import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var $, scs_loading, scs_alert, close_dialog: any;
@Component({
  selector: 'app-user-get-money',
  templateUrl: './user-get-money.component.html',
  styleUrls: ['./user-get-money.component.css']
})
export class UserGetMoneyComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj:any;
  job_id: any;
  ngOnInit() {
      this.job_id = window.location.hash.split("/user-get-money/")[1];
      this.get_sj();
  }
  back_to_history() {
      window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.user_get_money(this.job_id).subscribe(t => {
        this.sj = t;
        close_dialog();
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    })
  }
}
