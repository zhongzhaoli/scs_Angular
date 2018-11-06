import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {environment} from "../../../environments/environment";


declare var main_div_height, scs_loading, close_dialog, $, doLocate, scs_alert, scs_confirm, wx_friend_fx, wx_pengyou_fx: any;
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  sj: any;
  url: any;

  constructor(private apise: ApiService) { }

  ngOnInit() {
    this.get_sj();
    this.url = environment.url.jump_login;
  }
  get_sj(){
      $(".job_detail").hide();
      scs_loading();
    this.apise.find_id_job(location.hash.split("/job-detail/")[1]).subscribe(t => {
        this.sj = t[0];
        wx_friend_fx("云屯务集-兼职详细",this.sj.job_title);
        wx_pengyou_fx("云屯务集-" + this.sj.job_title);
        $(".job_detail").show();
        close_dialog();
        var latitude_longitude = this.sj.latitude_longitude;
        doLocate(latitude_longitude.split(",")[0],latitude_longitude.split(",")[1],this.sj.job_place,this.sj.job_detail_place);        
    });
  }
  back_to_history() {
      window.history.back();
  }
  job_sign(job_id){
    this.apise.job_sign(job_id).subscribe(t => {
      scs_alert("报名成功");
    },error => {
        if(error.error.message === "Unauthenticated."){
            window.location.href = this.url;
        }
        scs_alert(error.error.message);
    });
  }
}
