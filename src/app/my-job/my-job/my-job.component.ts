import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment'

declare var $, scs_alert, scs_confirm, scs_loading, close_dialog: any;
@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.css']
})
export class MyJobComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;

  jump_url: any;
  ngOnInit() {
    scs_loading();
    this.jump_url = environment.url.jump_login;
    this.apise.my_job().subscribe(t => {
        this.sj = t;
        close_dialog();
    },error => {
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else {
            scs_alert(error.error.message);
        }
    });
  }
  back_to_history() {
    window.history.back();
  }
  refusal_ly_alert(a){
    this.scs_alert("拒绝理由",a);
  }
  scs_alert(title,val){
    $.DialogByZ.Alert({Title: title, Content: val,BtnL:"确定",FunL:close_dialog()});
  }
}
