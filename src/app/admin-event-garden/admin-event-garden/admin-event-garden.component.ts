import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-admin-event-garden',
  templateUrl: './admin-event-garden.component.html',
  styleUrls: ['./admin-event-garden.component.css']
})
export class AdminEventGardenComponent implements OnInit {

  constructor(private apise: ApiService) { }

  status: string;

  ngOnInit() {
    let user_id = location.hash.split("/user/")[1];
    let event_id = location.hash.split("/user/")[0].split("/admin-event-garden/")[1];

    this.apise.admin_event_garden(event_id, user_id).subscribe(t => {
      this.status = "ok";
    },error => {
      this.status = error.error.message;
    });
  }

}
