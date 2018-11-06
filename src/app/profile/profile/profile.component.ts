import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

declare var $, setCookie, getCookie, delCookie, jump_login, scs_alert, scs_confirm, show_cj_div, closeTailor, scs_loading, close_dialog: any;

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    url: any;
    o_user: any;
    user: any;
    user_img: any;

    constructor(private apise: ApiService, private router: Router) {
    }

    ngOnInit() {
        scs_loading();
        $(".myself_all").hide();
        this.url = environment.url.jump_login;
        this.user_statue();
        this.get_profile();
        this.photo_cl();
    }

    to_reset(){
        window.location.href = this.url + "/#/reset-phone";
    }

    sign_out() {
        var _this = this;
        scs_confirm("确认退出登录吗？", function () {
            delCookie("api_token");
            delCookie("role");
            jump_login(_this.url);
        })
    }
    is_close(){
        scs_alert("暂时关闭");
    }
    get_profile() {
        if(getCookie("role") === "student" || getCookie("role") === "admin") {
            this.apise.find_examine_user().subscribe(t => {
                this.o_user = t.o_user;
                this.user = t.user;
                close_dialog();
                $(".myself_all").show();
                this.is_write_user();
            }, error => {
                if(error.status == 401){
                   jump_login(this.url);
                }
                else{
                    scs_alert(error.error.message);
                }
            })
        }
        else if(getCookie("role") === "enterprise"){
            this.apise.find_enterprise_detail().subscribe(t => {
                this.o_user = t.o_user;
                this.user = t.user;
                close_dialog();
                $(".myself_all").show();
                this.is_write_user();
            }, error => {
                if(error.status == 401){
                    jump_login(this.url);
                 }
                 else{
                     scs_alert(error.error.message);
                 }
            })
        }
        else{
            jump_login(this.url);
        }
    }

    user_statue() {
        var that = this;
        $(".user_status > div").on("click", function (a) {
            var a = a.currentTarget;
            var now_class = a.className.split(" ")[0];
            that.apise.user_job_status(a.className.split("status_")[1]).subscribe(t => {
                $(".user_status > div").each(function (val, item) {
                    $(item).removeClass(item.className.split(" ")[0] + "_active");
                });
                $(a).addClass(now_class + "_active");
            }, error => {
                if(error.status == 401){
                    jump_login(this.url);
                }
                else{
                    scs_alert(error.error.message);
                }
            });
        });
    }

    to_admin() {
        this.router.navigate(['/admin-list']);
    }

    is_write_user() {
        if (!this.user) {
            scs_alert("请完善个人或企业信息");
        }
    }

    update_user_img() {
        show_cj_div();
    }

    change_nickname() {
        $(".user_nickname").hide();
        $(".change_input_div").show();
    }

    api_change_nickname(val) {
        this.apise.user_nickname_change(val).subscribe(t => {
            $(".user_nickname").html(val);
            $(".user_nickname").show();
            $(".change_input_div").hide();
        },error => {
            scs_alert("修改失败");
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
            _this.user_img = base64;
            $(".user_text_div img")[0].src = base64;
            _this.apise.user_img_change(base64).subscribe(t => {
            },error => {
                scs_alert(error.error.message);
            })
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
                $(".user_text_div > img").prop("src", base64url);//显示为图片的形式
                _this.canvasDataURL(base64url,{"width":200})
                //关闭裁剪框
                closeTailor();
            }
        });
    }
}
