import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var $, scs_alert, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-job-feedback',
  templateUrl: './admin-job-feedback.component.html',
  styleUrls: ['./admin-job-feedback.component.css']
})
export class AdminJobFeedbackComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }
  sj: any;

  ngOnInit() {
    scs_loading();
    this.apise.admin_job_feedback().subscribe(t => {
      close_dialog();
      this.sj = t;
    },error => {
      close_dialog();
      this.router.navigate(['/admin-login']);
    });
  }
  back_to_history() {
    window.history.back();
  }
}
