import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_alert, close_dialog, scs_loading: any;

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    this.get_sj();
  }
  get_sj(){
    scs_loading();
    this.apise.get_recruit().subscribe(t => {
      close_dialog();
      this.sj = t;
      for(var i in this.sj) {
          if(i === "remove"){
            return;
          }
          this.sj[i].img_list = JSON.parse(this.sj[i].img_list);
      }
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    })
  }
  back_to_history() {
      window.history.back();
  }
}
