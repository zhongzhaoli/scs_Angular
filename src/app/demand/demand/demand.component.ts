import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
declare var $, scs_loading, scs_alert, close_dialog, img_big_div: any;
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
  jump_url: any;
    ngOnInit() {
    this.page = 1;
    this.show_sj = [];
    this.no_sj = false;
    this.jump_url = environment.url.jump_login;
    let that = this;
    scs_loading();
    this.get_sj(this.page);
    img_big_div();
    this.img_big_hide();
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
            this.img_click();
        },0)
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
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else {
            scs_alert(error.error.message);
        }
    })
  }
  img_click(){
        $("img[data-type=\"image\"]").on("click",function(){
            $(".img_big").find("img").attr("src",this.src);
            $(".img_big").show("fast");
            $("body")[0].style.overflow = "hidden";
        })
  }
  zan_demand(id,r){
        if($(r).attr("data-heart") == "false") {
            $(r).attr("class", "fa fa-heart");
            $(r).parent().find("span").html(parseInt($(r).parent().find("span").html()) + 1);
            $(r).attr("data-heart","true");
            this.apise.like_demand(id).subscribe(t => {
            }, error => {
                scs_alert(error.error.message);
            })
        }
  }
  img_big_hide(){
    let timeOutEvent;
    $(".img_big").on({
        touchstart: function(e) {
            // 长按事件触发
            timeOutEvent = setTimeout(function() {
                timeOutEvent = 0;
            }, 400);
            //长按400毫秒
            // e.preventDefault();
        },
        touchmove: function() {
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        },
        touchend: function() {
            clearTimeout(timeOutEvent);
            if (timeOutEvent != 0) {
                $(".img_big").hide("fast");
                $("body")[0].style.overflow = "auto";
            }
            return false;
        }
    });
  }
}
