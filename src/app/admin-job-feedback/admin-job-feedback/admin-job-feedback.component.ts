import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

declare var $, scs_alert, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-job-feedback',
  templateUrl: './admin-job-feedback.component.html',
  styleUrls: ['./admin-job-feedback.component.css']
})
export class AdminJobFeedbackComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }
  sj: any;
  jump_url: any;

  ngOnInit() {
    scs_loading();
    this.jump_url = environment.url.jump_login;
    this.apise.admin_job_feedback().subscribe(t => {
      close_dialog();
      this.sj = t;
    },error => {
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
  back_to_history() {
    window.history.back();
  }
}
