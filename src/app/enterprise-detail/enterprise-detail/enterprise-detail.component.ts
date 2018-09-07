import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
import { environment } from '../../../environments/environment'

declare var $, bind_foces, scs_alert, close_dialog, scs_loading: any;

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

  constructor(private apise: ApiService, private router: Router) {}

  name: string;
  code: string;
  place: string;
  email: string;
  prove: string;

  status: string;
  profile: any;
  credit: any;

  jump_url: any;

    ngOnInit(){
        this.jump_url = environment.url.jump_login;
        this.get_enterprise();
  }
  back_to_history() {
    window.history.back();
  }
  get_enterprise(){
    scs_loading();
    this.apise.find_enterprise_detail().subscribe(t => {
      close_dialog();
      this.credit = t.o_user;
      if(t.user){
        this.status = t.user.status;
        this.profile = t.user;
      }
      else{
        this.status = "";
          this.profile = "";
      }
      setTimeout(() => {
          if(this.profile != "" && this.status != 'refuse'){
              $(".profile").show();
          }
          else{
              $(".register_meessage").show();
          }
      },0);
    },error => {
        close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else {
          scs_alert(error.error.message);
        }
    });
  }
  upload_img() {
    $("#school_img").click();
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
      _this.prove = base64;
    }
  }

  img_do(input) {
    scs_loading();
    var that = this;
    var file = input.files[0];
    var read = new FileReader();
    read.readAsDataURL(file);
    read.onload = function () {
      var re = this.result;
      that.canvasDataURL(re, {"width": 600});
    }
  }
  upload_message(btn) {
    var that = this;
    scs_loading();
    $(".error_text").html("");
    var a = {
      "name": this.name,
      "code": this.code,
      "place": this.place,
      "email": this.email,
      "prove": this.prove,
    }
    this.apise.upload_personal_enterprise(a).subscribe(t => {
      this.scs_alert_do("已提交审核,请耐心等待",function(){
        that.router.navigate(['/profile']);
        close_dialog();
      });
    }, error => {
      close_dialog();
        if(error.status == 401) {
            window.location.href = this.jump_url;
        }
        else {
            scs_alert("填写信息有误");
            var error = error.error;
            for (var i in error) {
                $("[data-error=" + i + "]").html(error[i][0]);
            }
        }
    })
  }
  again_enterprise(){
    var that = this;
    this.scs_confirm("提示","确定要重新填写企业信息吗？（需要审核）",function(){
        close_dialog();
        $(".register_meessage").show();
        $(".profile").hide();
        that.name = that.profile.name;
        that.code = that.profile.code;
        that.place = that.profile.place;
        that.email = that.profile.email;
    });
  }
  scs_confirm(title,val,fun_a){
    $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
  }
  scs_alert_do(b,fun){
    $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
  }
}
