import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var Swiper, $, wx_friend_fx, scs_alert, wx_pengyou_fx: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private apise: ApiService) { }

  job_index_sj: any;
  evaluate_sj: any;
  ngOnInit() {
      this.job_index();
      this.evaluate_index();
      this.swiper_onload();
      wx_friend_fx("云屯务集","云屯务集——为深圳市乃至珠三角的中小型企业提供商务、技术服务；为大学生提供优质有保障的兼职，形成整合式、系统式、现代化的一站式综合服务平台。");
      wx_pengyou_fx("云屯务集");
  }
  //job_index数据
  job_index(){
      this.apise.job_index_sj().subscribe(t => {
          this.job_index_sj = t;
      });
  }
  //鹏安联系我们
  call_me(){
      scs_alert("联系电话：13534103146");
  }
  //evaluate_index数据
  evaluate_index(){
      this.apise.evaluate_show_index().subscribe(t => {
          this.evaluate_sj = t;
          setTimeout(function(){
              if($(".swiper-wrapper")[1]) {
                  $(".swiper-wrapper")[1].style.transform = "translate3d(0px, 0px, 0px)";
              }
          },0);
      })
  }
  //swiper 滚动
  swiper_onload(){
      var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay:true,//设置自动循环播放
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          }
      });
      var swiper2 = new Swiper('.swiper-container2', {
          slidesPerView: 2,
          spaceBetween: 10,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
  }
}
