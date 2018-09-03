import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var jump_login, scs_alert, close_dialog, $, scs_loading: any;

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {

  job: any;
  job_length: any;

  constructor(private apise: ApiService, private router: Router) { }

  ngOnInit() {
      //初始化select
      this.all_sj();
  }
  scs_alert_do(b,fun){
      $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
  type_change(i){
      var type = i.value;
      this.router.navigate(['/find-job-type/' + type])
  }
  all_sj(){
      var that = this;
      scs_loading();
      this.job = "";
      this.job_length = "";
      this.apise.find_job().subscribe(t => {
          this.job = t;
          this.job_length = (this.job.length) ? this.job.length : "none";
          close_dialog();
      },error => {
          scs_alert(error.error.message);
      })
  }
}
