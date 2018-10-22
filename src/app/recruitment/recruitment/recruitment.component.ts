import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_alert, close_dialog, scs_loading, PhotoSwipe: any;

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  sj_length: any;
  ngOnInit() {
    this.get_sj();
  }
  get_sj(){
    scs_loading();
    this.apise.get_recruit().subscribe(t => {
      close_dialog();
      this.sj = t;
      if(this.sj.length == ""){
        this.sj_length = 0;
      }
      else{
        this.sj_length = this.sj.length;
      }
      for(var i in this.sj) {
          if(i === "remove"){
            return;
          }
          this.sj[i].img_list = JSON.parse(this.sj[i].img_list);
      }
    },error => {
        close_dialog();
        scs_alert(error.error.message);
    })
  }
  back_to_history() {
      window.history.back();
  }
  asd(i){
    var items = [];
    scs_loading();
    $(i).parent().find("div").map((val,item) => {
      let obj = {w:null,h:null,src:null};      
      var nImg = new Image();
      nImg.onload = function(){
        close_dialog();
        nImg.src = $(item).find("img").attr("src");
        obj.w = nImg.width;
        obj.h = nImg.height;
        obj.src = $(item).find("img").attr("src");
        items.push(obj);
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var options = {
            index: 0,
            fullscreenEl: false,
            tapToClose: true,
            closeOnScroll: false,
            pinchToClose: true,
        };
        var gallery = new PhotoSwipe( pswpElement, "", items, options);
        gallery.init();
        
      }
      nImg.src = $(item).find("img").attr("src");
    });

  }
  call_me_alert(a){
    scs_alert('手机号：' + a);
  }
}
