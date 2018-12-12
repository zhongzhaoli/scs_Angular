import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var $, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-job-sign',
  templateUrl: './admin-job-sign.component.html',
  styleUrls: ['./admin-job-sign.component.css']
})
export class AdminJobSignComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    this.get_sj();
  }
  back_to_history() {
    window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.admin_job_sign().subscribe(t => {
      close_dialog();
      this.sj = t;
      console.log(this.sj);
    });
  }
}
