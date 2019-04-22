import { Component, OnInit } from '@angular/core';
import { EventsService } from '../event/events.service';
import { EventModel } from '../models/EventModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  events: EventModel[]

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents()
  }

  getEvents() {
    this.eventsService.getComingEvents().subscribe((res: EventModel[]) => {
      console.log(res);
      this.events = res
    })
  }

}
