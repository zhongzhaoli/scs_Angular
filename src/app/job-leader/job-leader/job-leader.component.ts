import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_alert, scs_loading, close_dialog: any;

@Component({
  selector: 'app-job-leader',
  templateUrl: './job-leader.component.html',
  styleUrls: ['./job-leader.component.css']
})
export class JobLeaderComponent implements OnInit {

  constructor(private apise: ApiService) { }
  sj: any;
  job_id: any;

  ngOnInit() {
    scs_loading();
    this.job_id = location.hash.split("/job-leader/")[1];
    this.apise.my_job_leader(this.job_id).subscribe(t => {
      close_dialog();
      this.sj = t;
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    });
  }
  back_to_history() {
    window.history.back();
  }
}
