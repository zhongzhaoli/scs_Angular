import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var getCookie: any;
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor(private router: Router) { }

  status: any;
  ngOnInit() {
    var role = getCookie("role");
    if(role != "admin"){
      this.router.navigate(['/admin-login']);
    }
    else{
      this.status = "ok";
    }
  }
  back_to_history() {
    window.history.back();
  }
}
