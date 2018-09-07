import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { environment } from '../../environments/environment'

declare var $, getCookie, jump_login, setCookie: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router,private apise: ApiService) { }

    role: string;
    url: any;

  ngOnInit() {
      this.url = environment.url.jump_login;
      this.role = getCookie("role");
  }
  to_router(url){
      this.router.navigate([url]);
  }
}

