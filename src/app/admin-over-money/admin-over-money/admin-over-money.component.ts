import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var $, scs_loading, scs_alert, scs_confirm, close_dialog, main_div_height: any;

@Component({
  selector: 'app-admin-over-money',
  templateUrl: './admin-over-money.component.html',
  styleUrls: ['./admin-over-money.component.css']
})
export class AdminOverMoneyComponent implements OnInit {

  constructor(private apise: ApiService) { }

  job_id: any;
  sj: any;
  ngOnInit() {
    this.job_id = window.location.hash.split("/admin-over-money/")[1];
    this.get_sj();
  }
  back_to_history() {
      window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.admin_over_money(this.job_id).subscribe(t => {
      close_dialog();
      this.sj = t[0];
      setTimeout(() => {
          main_div_height();
      },0)
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    })
  }
  over_job(){
      this.apise.admin_over_job(this.job_id).subscribe(t => {
          scs_alert("完结成功");
      },error => {
          scs_alert(error.error.message);
      });
  }
}
