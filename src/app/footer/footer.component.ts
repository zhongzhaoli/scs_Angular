import { Component, OnInit } from '@angular/core';
declare var getRem,footer_position:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      getRem(720,100);
  }

}
