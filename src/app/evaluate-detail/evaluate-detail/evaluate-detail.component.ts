import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_loading, main_div_height, close_dialog, scs_alert: any;

@Component({
  selector: 'app-evaluate-detail',
  templateUrl: './evaluate-detail.component.html',
  styleUrls: ['./evaluate-detail.component.css']
})
export class EvaluateDetailComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    this.get_sj();
    main_div_height();
  }
  back_to_history() {
    window.history.back();
  }
  get_sj(){
    scs_loading();
    var code = window.location.hash.split("/evaluate-detail/")[1];
    this.apise.evaluate_detail_show(code).subscribe(t => {
      this.sj = t[0];
      close_dialog();
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
}
