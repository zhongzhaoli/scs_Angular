import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment';

declare var $, scs_loading, close_dialog, scs_alert: any;

@Component({
  selector: 'app-my-recruitment',
  templateUrl: './my-recruitment.component.html',
  styleUrls: ['./my-recruitment.component.css']
})
export class MyRecruitmentComponent implements OnInit {

  constructor(private apise: ApiService,private router: Router) { }

  sj: any;
  sj_length: any;
  url = environment.url.jump_login;
  ngOnInit() {
    this.get_sj();
  }
  back_to_history() {
    window.history.back();
  }
  get_sj(){
    scs_loading();
    this.apise.get_my_recruit().subscribe(t => {
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
      window.location.href = this.url + "/#/login";
    })
  }
  del_sj(id, i){
    scs_loading();
    this.apise.del_my_recruit(id).subscribe(t => {
      scs_alert("删除成功");
      this.sj.remove(i);
      this.sj_length = this.sj_length - 1;
    },error => {
      scs_alert(error.error.message);
    })
  }
  over(id,i){
    scs_loading();
    this.apise.over_recruit(id).subscribe(t => {
      close_dialog();
      scs_alert("已完成");
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    })
  }
  asd(a){
    $(a).parent().parent().viewer({"toolbar": false, "title": false, "navbar": false});
  }
}
