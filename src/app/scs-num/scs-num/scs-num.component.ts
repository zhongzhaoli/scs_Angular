import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';

declare var $, scs_loading, close_dialog, scs_alert: any;

@Component({
  selector: 'app-scs-num',
  templateUrl: './scs-num.component.html',
  styleUrls: ['./scs-num.component.css']
})
export class ScsNumComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) { }

  sj: any;
  jump_url: any;
  ngOnInit() {
    scs_loading();
    this.jump_url = environment.url.jump_login;
    this.apise.admin_scs_num().subscribe(t => {
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
    })
  }
  back_to_history() {
    window.history.back();
  }
}
