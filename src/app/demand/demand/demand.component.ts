import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_loading, scs_alert, close_dialog: any;
@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(private apise: ApiService) { }

  page: any;
  new_sj: any;
  show_sj: any;
  ngOnInit() {
    this.page = 1;
    this.show_sj = [];
    this.get_sj(this.page);
    let that = this;
    $(window).scroll(function (){
      that.loadmore($(this));
    });
  }
  loadmore(obj){
    var scrollHeight = $("html").get(0).scrollHeight;
    var scrollTop =  $("html").get(0).scrollTop;
    var windowHeight = $(obj).height();


    if (scrollTop + windowHeight >= scrollHeight) {
      this.page = this.page + 1;
      this.get_sj(this.page);
    }
  }
  get_sj(page){
    scs_loading();
    this.apise.demand_index(page).subscribe(t => {
      close_dialog();
      this.new_sj = t;
      for(let i = 0; i < t.data.length; i++){
        this.show_sj.push(t.data[i]);
      }
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
}
