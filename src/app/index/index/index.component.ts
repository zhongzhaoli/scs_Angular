import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

declare var Swiper, $: any;
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
  }
  //job_index数据
  job_index(){
      this.apise.job_index_sj().subscribe(t => {
          this.job_index_sj = t;
      });
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
