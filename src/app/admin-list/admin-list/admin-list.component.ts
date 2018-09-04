import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../api.service';

declare var getCookie, scs_loading, close_dialog: any;
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor(private router: Router, private apise: ApiService) { }

  admin_treated_num: any;
  status: any;
  ngOnInit() {
    var role = getCookie("role");
    if(role != "admin"){
      this.router.navigate(['/admin-login']);
    }
    else{
      this.admin_treated();
    }
  }
  back_to_history() {
    window.history.back();
  }
  admin_treated(){
    scs_loading();
    this.apise.admin_treated().subscribe(t => {
      this.admin_treated_num = t;
      this.status = "ok";
      close_dialog();
    })
  }
}
