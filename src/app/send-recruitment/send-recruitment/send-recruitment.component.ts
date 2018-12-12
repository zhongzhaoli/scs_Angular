import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
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
  url: any;
  address: any;
  classify: any;

  ngOnInit() {
      main_div_height();
      this.type = 1;
      this.img_list = [];
      this.address = "";
      this.url = environment.url.jump_login;
      this.classify = "饭卡"
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
      if(a.files[0].size / 1024 / 1024 >= 8){
          scs_alert("图片大小不能超过8MB");
          return;
      }else{
        that.img_list.push(location.origin + "/assets/images/loading_2.gif");
        read.readAsDataURL(a.files[0]);
        read.onload = function () {
            var s = this.result;
            that.canvasDataURL(s, {"width": 800})
            a.value = "";
        };
      }
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
           var quality = 1;  // 默认图片质量为0.7
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
           // quality值越小，所绘制出的图像越模糊
           var base64 = canvas.toDataURL('image/jpeg', quality);
           // 回调函数返回base64的值
           _this.img_list.push(base64);
           _this.img_list.remove(location.origin + "/assets/images/loading_2.gif");
           close_dialog();
       }
   }
  send_rec(){
      scs_loading();
      this.apise.send_recruit(this.text,this.type,this.img_list,this.address,this.classify).subscribe(t => {
          close_dialog();
          this.router.navigate(['/recruitment']);
      },error => {
          if(error.status === 401){
            window.location.href = this.url;
          }
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
