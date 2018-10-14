import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
declare var $, main_div_height, scs_alert, scs_loading, close_dialog: any;
@Component({
  selector: 'app-send-recruitment',
  templateUrl: './send-recruitment.component.html',
  styleUrls: ['./send-recruitment.component.css']
})
export class SendRecruitmentComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }
  img_list: any;
  type: any;
  text: any;

  ngOnInit() {
      main_div_height();
      this.type = 1;
      this.img_list = [];
  }
  back_to_history() {
      window.history.back();
  }
  add_img(){
    if(this.img_list.length >= 3){
      return;
    }
    $("input[type='file']").click();
  }
  file_change(a){
      let that = this;
      var read = new FileReader();
      read.readAsDataURL(a.files[0]);
      read.onload = function () {
         var s = this.result;
         that.canvasDataURL(s, {"width": 500})
         a.value = "";
      };
  }
  del_img(a){
    this.img_list.remove(a);
  }
   //图片压缩
   canvasDataURL(path, obj) {
       var img = new Image();
       img.src = path;
       var _this = this;
       img.onload = function () {
           var that = this;
           // 默认按比例压缩
           var w = img.width,
               h = img.height,
               scale = w / h;
           w = obj.width || w;
           h = obj.height || (w / scale);
           var quality = 0.9;  // 默认图片质量为0.7
           //生成canvas
           var canvas = document.createElement('canvas');
           var ctx = canvas.getContext('2d');
           // 创建属性节点
           var anw = document.createAttribute("width");
           anw.nodeValue = w.toString();
           var anh = document.createAttribute("height");
           anh.nodeValue = h.toString();
           ;
           canvas.setAttributeNode(anw);
           canvas.setAttributeNode(anh);
           ctx.drawImage(img, 0, 0, w, h);
           // 图像质量
           if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
               quality = obj.quality;
           }
           // quality值越小，所绘制出的图像越模糊
           var base64 = canvas.toDataURL('image/jpeg', quality);
           // 回调函数返回base64的值
           close_dialog();
           _this.img_list.push(base64);
       }
   }
  send_rec(){
      scs_loading();
      this.apise.send_recruit(this.text,this.type,this.img_list).subscribe(t => {
          close_dialog();
          this.router.navigate(['/recruitment']);
      },error => {
          close_dialog();
          for(var i in error.error){
              var error = error.error
              scs_alert(error[i]);
          }
      })
  }
  qh_active(type,i){
      this.type = type;
      this.type_qh(type,i)
  }
  type_qh(type,i){
      if(type === "good"){
          $(i).parent().find(".good").addClass("active");
          $(i).parent().find(".bad").removeClass("active");
          this.type = 1;
          $("textarea").attr("placeholder","请填写物品的描述以及丢失位置");
          $(".img_span").html("上传图片方便您快速找回");
      }
      else{
          $(i).parent().find(".bad").addClass("active");
          $(i).parent().find(".good").removeClass("active");
          this.type = 2;
          $("textarea").attr("placeholder","请填写物品的描述以及拾取位置");
          $(".img_span").html("上传图片方便快速找到失主");
      }
  }
}
