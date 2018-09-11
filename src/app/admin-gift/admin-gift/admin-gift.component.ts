import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';


declare var $, scs_loading, scs_alert, scs_confirm, close_dialog, main_div_height, show_cj_div, closeTailor, getCookie: any;
@Component({
  selector: 'app-admin-gift',
  templateUrl: './admin-gift.component.html',
  styleUrls: ['./admin-gift.component.css']
})
export class AdminGiftComponent implements OnInit {

  constructor(private apise: ApiService, private route: Router) { }

  name: any;
  integral: any;
  type: any;
  img: any;
  num: any;
  notes: any;

  show_type: any;
  gift_type_1: any;
  gift_type_2: any;
  gift_type_3: any;
  show_gift: any;
  gift: any;
  jump_url: any;

    ngOnInit() {
      let role = getCookie("role");
      if(role != "admin"){
          this.route.navigate(['/admin-login']);
      }
      main_div_height();
      this.model_init();
      this.photo_cl();
      this.gift_init();
      this.get_sj();
      this.jump_url = environment.url.jump_login;
  }
  back_to_history() {
      window.history.back();
  }
  model_init(){
    this.type = "1";
  }
  upload_img() {
      show_cj_div();
  }
  add_gift(){
    var that = this;
    this.scs_confirm("提示","确认要添加<span style='color:red'>" + name + "</span>这个券吗？",function(){
      close_dialog();
      scs_loading();
      that.apise.admin_add_gift({"name": that.name,"integral": that.integral, "type": that.type, "img": that.img, "num": that.num, "notes": that.notes}).subscribe(t => {
          close_dialog();
          that.scs_alert("提示","添加成功",function(){
              window.location.reload();
          });
      },error => {
          close_dialog();
          if(error.status == 401) {
              window.location.href = this.jump_url;
          }
          else {
              scs_alert(error.error.message);
          }
      })
    });
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
          $(".upload_img_btn")[0].src = base64;
          _this.img = base64;
      }
  }


  photo_cl() {
      var _this = this;
      //旋转
      $(".cropper-rotate-btn").on("click", function () {
          $('#tailoringImg').cropper("rotate", 45);
      });
      //复位
      $(".cropper-reset-btn").on("click", function () {
          $('#tailoringImg').cropper("reset");
      });
      //换向
      var flagX = true;
      $(".cropper-scaleX-btn").on("click", function () {
          if (flagX) {
              $('#tailoringImg').cropper("scaleX", -1);
              flagX = false;
          } else {
              $('#tailoringImg').cropper("scaleX", 1);
              flagX = true;
          }
          flagX != flagX;
      });

      //裁剪后的处理
      $("#sureCut").on("click", function () {
          if ($("#tailoringImg").attr("src") == null) {
              return false;
          } else {
              var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
              var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
              _this.canvasDataURL(base64url,{"width":200})
              //关闭裁剪框
              closeTailor();
          }
      });
  }
  scs_confirm(title,val,fun_a){
      $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  scs_alert(title,val,fun_a){
      $.DialogByZ.Alert({Title: title, Content: val,BtnL:"确定",FunL:fun_a});
  }
  gift_init(){
      this.gift_type_1 = [];
      this.gift_type_2 = [];
      this.gift_type_3 = [];
      this.show_type = 1;
  }
  list_qh(i){
      //更改active
      $(".gift_list div").map((val,item) => {
          $(item).removeClass("active");
      })
      $(i).addClass("active");
      //更改数据
      let type = $(i).attr("data-type");
      if(type === "1"){
          this.show_gift = this.gift_type_1;
          this.show_type = 1;
      }
      if(type === "2"){
          this.show_gift = this.gift_type_2;
          this.show_type = 2;
      }
      if(type === "3"){
          this.show_gift = this.gift_type_3;
          this.show_type = 3;
      }
  }
  get_sj(){
      scs_loading();
      this.apise.all_gift().subscribe(t => {
          close_dialog();
          this.gift = t;
          this.sj_classify(t);
          this.show_gift = this.gift_type_1;
      },error => {
          close_dialog();
          if(error.status == 401) {
              window.location.href = this.jump_url;
          }
          else {
              this.route.navigate(['/admin-login'])
          }
      })
  }
   sj_classify(sj){
       $(sj).map((item,val) => {
           if(val.type == "1" || val.type == "2" || val.type == "3"){
               this.gift_type_1.push(val);
           }
           if(val.type == "4"){
               this.gift_type_2.push(val);
           }
           if(val.type == "5"){
               this.gift_type_3.push(val);
           }
       })
   }
   del_gift(id,i){
        scs_loading();
        this.apise.admin_delete_gift(id).subscribe(t => {
            close_dialog();
            scs_alert("删除成功");
            this.show_gift.remove(i);
        },error => {
            close_dialog();
            if(error.status == 401) {
                window.location.href = this.jump_url;
            }
            else {
                this.route.navigate(['/admin-login'])
            }
        });
   }
}
