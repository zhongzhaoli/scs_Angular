import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

declare var $, scs_loading, scs_alert, scs_confrim, close_dialog, main_div_height: any;

@Component({
  selector: 'app-send-demand',
  templateUrl: './send-demand.component.html',
  styleUrls: ['./send-demand.component.css']
})
export class SendDemandComponent implements OnInit {

  constructor(private apise: ApiService, private route:Router) { }

  user: any;
  jump_url: any;
  sj: any;
  attr_ng: any;
  upload_type: any;
  ngOnInit() {
    this.get_user();
    this.upload_type = "photo"
    this.jump_url = environment.url.jump_login;
    this.new_change();
  }
  back_to_history() {
      window.history.back();
  }
  get_user(){
      scs_loading();
      this.apise.find_examine_user().subscribe(t => {
          close_dialog();
          this.user = t;
          setTimeout(() => {
              main_div_height();
              let that = this;
              that.attr_ng = $(".header").html().split("_ngcontent-")[1].split('="" ')[0];
              this.new_click();
          },0)
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
  click_upload(i){
      let now_list = parseInt($(i).attr("data-list"));
      if(this.upload_type === "photo") {
          if (!$("#now_list" + now_list).length) {
              $("<input type='file' accept='image/*' id=" + 'now_list' + now_list + ">").appendTo($(".form_div form"));
          }
          $("#" + 'now_list' + now_list).click();
      }
      if(this.upload_type === "video"){
          $("<input type='file' accept='video/*' id=" + 'now_list' + now_list + ">").appendTo($(".form_div form"));
          $("#" + 'now_list' + now_list).click();
      }
      this.new_change();
  }
  send(text){
      scs_loading();
      var fd = new FormData();
      fd.append("text",text);
      $("input[type='file']").map((val,item) => {
          const file_type = item.files[0].type;
          let fd_name;
          if(file_type.indexOf("image") != -1) {
              fd_name = "image|" + item.id;
          }
          if(file_type.indexOf("video") != -1) {
              fd_name = "video|" + item.id;
          }
          fd.append(fd_name,item.files[0]);
      });
      this.apise.send_demand(fd).subscribe(t => {
          close_dialog();
          this.route.navigate(["/demand"]);
      },error => {
          close_dialog();
          scs_alert(error.error.message);
      })
  }
  two_status(i,type){
      let that = this;
      $(".two_status div").map((val,item) => {
          $(item).removeClass("active");
      })
      this.upload_type = type;
      $(i).addClass("active");
      $(".form_div form").html("");
      $(".ri_media").remove();
      $(".send_media").html("");
      $("    <div _ngcontent-"+ that.attr_ng +" class=\"uplopad_file\" data-list='1'>\n" +
          "      <i _ngcontent-"+ that.attr_ng +" class=\"material-icons\">\n" +
          "        add\n" +
          "      </i>\n" +
          "    </div>").appendTo($('.send_media'));
      this.new_click();
  }
  new_click(){
      let that = this;
      $(".uplopad_file").on("click",function(){
          that.click_upload(this);
      })
  }
  new_change(){
      let that = this;
      $("input[type='file']").on("change",function(){
          scs_loading();
          const type = this.files[0].type;
          //判断类型
          if(type.indexOf("video") != -1 || type.indexOf("image") != -1) {
              const id_name = $(this).attr("id");
              if(this.files[0].size / 1024 / 1024 > 30){
                  close_dialog();
                  scs_alert("文件不得大于30MB");
                  return;
              }
              let id_name_num = id_name.split("now_list")[1];
              //image
              if(type.indexOf("image") != -1) {
                  var read = new FileReader();
                  read.readAsDataURL(this.files[0]);
                  read.onload = function () {
                      var re = this.result;
                      //预览div
                      $("<div _ngcontent-"+ that.attr_ng +" class='ri_media' style='background:url(" + re + ");background-size:cover;background-position: center center;'></div>").appendTo($(".send_media"));
                      if (id_name_num >= 9) {
                          $("[data-list=" + id_name_num + "]").remove();
                          close_dialog();
                      }
                      else {
                          $("[data-list=" + id_name_num + "]").remove();
                          $("    <div _ngcontent-"+ that.attr_ng +" class=\"uplopad_file\" data-list=" + (parseInt(id_name_num) + 1) + ">\n" +
                              "      <i _ngcontent-"+ that.attr_ng +" class=\"material-icons\">\n" +
                              "        add\n" +
                              "      </i>\n" +
                              "    </div>").appendTo($('.send_media'));
                          close_dialog();
                          that.new_click();
                      }
                  }
              }
              if(type.indexOf("video") != -1) {
                  close_dialog();
                  const elm = this.files[0];
                  let video_url = URL.createObjectURL(elm);
                  $("<video width='100%' controls src="+ video_url +">").appendTo($(".send_media"));
                  $("[data-list='1']").remove();
              }
          }
          else{
              scs_alert("上传文件类型错误");
              $(this).val("");
          }
      })
  }
}
