import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Router} from '@angular/router';

declare var map_do: any;
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  sj: any;
  constructor(private apise: ApiService,private router: Router) { }

  ngOnInit() {
      map_do();
  }
}
