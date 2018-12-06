import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-event-garden',
  templateUrl: './event-garden.component.html',
  styleUrls: ['./event-garden.component.css']
})
export class EventGardenComponent implements OnInit {

  constructor(private apise: ApiService) { }

  state: string;

  ngOnInit() {
    this.get_event_state();
  }
  back_to_history() {
      window.history.back();
  }
  get_event_state(){
    this.apise.event_garden().subscribe(t => {
      this.state = "no";
    },error => {
      this.state = error.error.message;
    });
  }
}
