import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
import { environment } from '../../../environments/environment'


declare var $, bind_foces, scs_alert, close_dialog, scs_loading: any;

@Component({
    selector: 'app-register-detail',
    templateUrl: './register-detail.component.html',
    styleUrls: ['./register-detail.component.css']
})
export class RegisterDetailComponent implements OnInit {

    name: string;
    height: string;
    weight: string;
    age: string;
    email: string;
    schoolcode: string;
    class: string;
    sex: string;
    intention: any;
    prove: string;
    wechat: string;

    status: string;
    profile: any;
    o_user: any;

    jump_url: any;

    constructor(private apise: ApiService, private router: Router) {
    }

    ngOnInit() {
        this.intention = [];
        bind_foces();
        this.get_user();
        this.jump_url = environment.url.jump_login;
    }
    checkbox_change(a){
        if(a.checked){
            this.intention.push(a.name);
        }
        else{
            var index = this.intention.indexOf(a.name);
            if(index > -1){
                this.intention.splice(index,1);
            }
        }
    }
    back_to_history() {
        window.history.back();
    }

    get_user() {
        scs_loading();
        this.apise.find_examine_user().subscribe(t => {
            close_dialog();
            if(t.user){
                this.status = t.user.status;
                this.profile = t.user;
                this.o_user = t.o_user;
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
            else{
                scs_alert(error.error.message);
            }
        })
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
            that.canvasDataURL(re, {"width": 400});
        }
    }
    again_user(){
        var that = this;
        this.scs_confirm("提示","确定要重新填写个人信息吗？（需要审核）",function(){
            $(".register_meessage").show();
            $(".profile").hide();
            that.name = that.profile.name;
            that.height = that.profile.height;
            that.weight = that.profile.weight;
            that.age = that.profile.age;
            that.email = that.profile.email;
            that.schoolcode = that.profile.schoolcode;
            that.class = that.profile.class;
            that.sex = that.profile.sex;
            that.intention = that.profile.intention;
            that.wechat = that.profile.wechat;
        });
    }

    scs_confirm(title,val,fun_a){
        $.DialogByZ.Confirm({Title: title, Content: val,FunL:fun_a,FunR:close_dialog()})
    }
    scs_alert_do(b,fun){
        $.DialogByZ.Alert({Title: "提示", Content: b,BtnL:"确定",FunL:fun});
    }

    upload_message(btn) {
        var that = this;
        scs_loading();
        $(".error_text").html("");
        var a = {
            "name": this.name,
            "height": this.height,
            "weight": this.weight,
            "age": this.age,
            "email": this.email,
            "schoolcode": this.schoolcode,
            "class": this.class,
            "sex": this.sex,
            "intention": this.intention.toString(),
            "prove": this.prove,
            "wechat": this.wechat
        }
        this.apise.upload_personal(a).subscribe(t => {
            this.scs_alert_do("已提交审核,请耐心等待",function(){
                window.location.reload();
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
}

