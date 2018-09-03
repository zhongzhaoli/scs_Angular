import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";

declare var $, scs_alert, scs_confirm, scs_loading, close_dialog: any;

@Component({
  selector: 'app-my-customer',
  templateUrl: './my-customer.component.html',
  styleUrls: ['./my-customer.component.css']
})
export class MyCustomerComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  ngOnInit() {
    scs_loading();
    this.apise.my_customer().subscribe(t => {
      close_dialog();
      this.sj = t;
      console.log(this.sj);
    },error => {
      close_dialog();
      scs_alert("获取数据失败");
    });
  }
  back_to_history() {
    window.history.back();
  }
}
