import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var $, scs_alert, scs_loading, close_dialog: any;
@Component({
  selector: 'app-integral-shop',
  templateUrl: './integral-shop.component.html',
  styleUrls: ['./integral-shop.component.css']
})
export class IntegralShopComponent implements OnInit {

  constructor(private apise: ApiService) { }

  user: any;
  ngOnInit() {
      this.get_user_sj();
  }
  back_to_history() {
      window.history.back();
  }
  get_user_sj() {
      scs_loading();
      this.apise.user_my_integral().subscribe(t => {
          close_dialog();
          this.user = t;
         console.log(this.user);
      },error => {
        close_dialog();
         scs_alert(error.error.message);
      })
  }

}
