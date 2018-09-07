import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';


declare var $, scs_loading, close_dialog: any;

@Component({
  selector: 'app-admin-over-job',
  templateUrl: './admin-over-job.component.html',
  styleUrls: ['./admin-over-job.component.css']
})
export class AdminOverJobComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj: any;
  ngOnInit() {
      this.get_sj();
  }
  get_sj(){
    scs_loading();
    this.apise.admin_over_job_student().subscribe(t => {
      this.sj = t;
        close_dialog();
    },error => {
      close_dialog();
        this.router.navigate(['/admin-login']);
    })
  }
  back_to_history() {
      window.history.back();
  }
}
