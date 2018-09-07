import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
declare var $, scs_loading, scs_confirm, close_dialog, scs_alert: any;
@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj: any;
  ngOnInit() {
    this.get_sj();
  }
  back_to_history() {
      window.history.back();
  }
  btn_on_off(i){
     for(let j = 0; j < this.sj.length; j++){
         if(this.sj[j] == i){
             let type = (this.sj[j].type == "on") ? "off" : "on";
             this.sj[j].type = type;
             this.change_btn(i.id,type);
         }
     }
  }
  get_sj(){
    scs_loading();
    this.apise.admin_all_event().subscribe(t => {
        close_dialog();
        this.sj = t;
    },error => {
        close_dialog();
        this.router.navigate(['/admin-login']);
    });
  }
  change_btn(id,type){
      scs_loading();
      this.apise.admin_change_event(id,type).subscribe(t => {
          close_dialog();
      },error => {
          close_dialog();
          scs_alert(error.error.message);
      })
  }
}
