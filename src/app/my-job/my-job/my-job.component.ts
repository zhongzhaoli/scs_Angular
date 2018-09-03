import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var $, scs_alert, scs_confirm, scs_loading, close_dialog: any;
@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.css']
})
export class MyJobComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    scs_loading();
    this.apise.my_job().subscribe(t => {
      this.sj = t;
      close_dialog();
    },error => {
      scs_alert(error.error.message);
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
