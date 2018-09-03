import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-function',
  templateUrl: './admin-function.component.html',
  styleUrls: ['./admin-function.component.css']
})
export class AdminFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  back_to_history() {
    window.history.back();
  }
}
