import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventsService } from '../events.service';
import { EventModel } from '../models/event.model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl']
})
export class EventPageComponent implements OnInit { 

  eventId: string
  event: EventModel

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {}

  ngOnInit() {
    // this.route.paramMap.pipe(switchMap(params => {
    //   this.eventId = params.get('id')
    //   return new Observable();
    // }))
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id')

      this.eventsService.getEventById(this.eventId).subscribe((data: EventModel) => {
        this.event = data
      })
    })
  }

}
