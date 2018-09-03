import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
declare var $, scs_loading, scs_alert, scs_confirm, close_dialog: any;

@Component({
  selector: 'app-admin-evaluate',
  templateUrl: './admin-evaluate.component.html',
  styleUrls: ['./admin-evaluate.component.css']
})
export class AdminEvaluateComponent implements OnInit {

  constructor(private apise: ApiService) { }

  sj: any;
  choose: any;
  choose_id_arr :any;

  ngOnInit() {
    this.choose_id_arr = [];
    this.get_all();
  }
  back_to_history() {
    window.history.back();
  }
  get_all(){
    scs_loading();
    this.apise.admin_index_evaluate().subscribe(t => {
      this.choose = [];
      this.sj = [];
      for(var i in t){
        if(i === 'remove'){
          continue;
        }
        if(t[i].status == 1){
          this.choose.push(t[i]);
          this.choose_id_arr.push(t[i].id);
        }
        if(t[i].status == 2){
          this.sj.push(t[i]);
        }
      }
      console.log(this.choose_id_arr);
      close_dialog();
    });
  };
  add_del_do(type,evaluate){
    if(type === "add"){
      //将ID插入数组
      this.choose_id_arr.push(evaluate.id);
      //插入已选择数组
      this.choose.push(evaluate);
      //删除未选择数组
      this.sj.remove(evaluate);
    }
    if(type === "del"){
      //将ID插入数组
      this.choose_id_arr.remove(evaluate.id);
      //插入未选择数组
      this.sj.push(evaluate);
      //删除已选择数组
      this.choose.remove(evaluate);
    }
    console.log(this.choose_id_arr);
  }
  change_save(){
    scs_loading();
    this.apise.admin_change_evaluate_index(this.choose_id_arr).subscribe(t => {
      close_dialog();
      scs_alert("保存成功");
    },error => {
      close_dialog();
      scs_alert(error.error.message);
    });
  }
}
