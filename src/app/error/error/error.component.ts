import { Component, OnInit } from '@angular/core';

declare var main_div_height:any;
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      main_div_height();
  }

}
