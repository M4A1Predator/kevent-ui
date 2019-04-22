import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap, mergeMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EventModel } from '../../models/EventModel';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl']
})
export class EventPageComponent implements OnInit {

  private event: EventModel = null

  constructor(private eventsService: EventsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(flatMap(params => {
        return of(params["eventId"])
      })
    ).pipe(flatMap(eventId => {
      return this.eventsService.getEvent(eventId)
    })).subscribe(data => {
      console.log(data);
      this.event = data
    })
  }

}
