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
  can_get: boolean;
  no_sj: boolean;
attr_ng: any;
    ngOnInit() {
    this.page = 1;
    this.show_sj = [];
    this.no_sj = false;
    let that = this;
    scs_loading();
    this.get_sj(this.page);

    $(window).scroll(function (){
      this.can_get = true;
      that.loadmore($(this));
    });
  }
  loadmore(obj){
    var scrollHeight = $("html").get(0).scrollHeight;
    var scrollTop =  Math.ceil($(obj).scrollTop());
    var windowHeight = $(obj).height();

    if (scrollTop + windowHeight >= scrollHeight && this.can_get) {
      this.page = this.page + 1;
      this.get_sj(this.page);
    }
  }
  get_sj(page){
    if(this.no_sj){
      return;
    }
    this.apise.demand_index(page).subscribe(t => {
        close_dialog();
        this.new_sj = t;
        for (let i = 0; i < t.data.length; i++) {
            t.data[i].media_arr = JSON.parse(t.data[i].media_arr);
            this.show_sj.push(t.data[i]);
        }
        setTimeout(() => {
            this.attr_ng = $(".header").html().split("_ngcontent-")[1].split('="" ')[0];
            $(".media_div").map((val,item) => {
                let par = $(item).parent()[0];
                $(item).children().map((val,items) => {
                    if($(items).attr("data-type") === "image"){
                        let img_div = $("<div _ngcontent-"+ this.attr_ng +" class='new_img_div'></div>").appendTo(par);
                        img_div[0].style.background = "url("+ $(items).attr("src") +")";
                        img_div[0].style.backgroundSize = "cover";
                        img_div[0].style.backgroundPosition = "center center";
                    }
                    if($(items).attr("data-type") === "video"){
                        let video_div = $("<video width='100%' controls='controls' src="+ $(items).attr("src") +">").appendTo(par);
                    }
                })
            });
        },0);
        this.can_get = true;
        if(t.last_page != t.current_page){
            setTimeout(() => {
                if ($("body").get(0).offsetHeight <= $(window).height()) {
                    this.page = this.page + 1;
                    this.get_sj(this.page);
                }
            }, 0);
        }
        else{
          this.no_sj = true;
        }
    },error => {
      scs_alert(error.error.message);
    })
  }
}
