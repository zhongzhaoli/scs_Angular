import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


declare var $, scs_loading, close_dialog, scs_alert: any;

@Component({
  selector: 'app-admin-over-job',
  templateUrl: './admin-over-job.component.html',
  styleUrls: ['./admin-over-job.component.css']
})
export class AdminOverJobComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj: any;
  jump_url: any;
  ngOnInit() {
      this.get_sj();
      this.jump_url = environment.url.jump_login;
  }
  get_sj(){
    scs_loading();
    this.apise.admin_over_job_student().subscribe(t => {
      this.sj = t;
        close_dialog();
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
    })
  }
  back_to_history() {
      window.history.back();
  }
}
