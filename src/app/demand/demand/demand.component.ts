import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(private apise: ApiService) { }

  page: any;
  new_sj: any;
  show_sj: any;
  ngOnInit() {
    this.page = 1;
    this.get_sj();
  }
  get_sj(){
    this.apise.demand_index(this.page).subscribe(t => {
      this.new_sj = t;
      this.show_sj.push(t);
    },error => {
      scs_alert(error.error.message);
    })
  }
}
