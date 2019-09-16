import { Component, OnInit } from '@angular/core'
import { EventModel } from '../../models/EventModel'
import { EventsService } from '../events.service'
import { BreadCumbItem } from 'src/app/shared/components/breadcumb/breadcumb-item';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.styl']
})
export class EventListPageComponent implements OnInit {

  events: EventModel[]
  breadcumb: BreadCumbItem[]

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents()
    this.breadcumb = [
      {
        label: 'Events',
        url: '/events'
      } as BreadCumbItem
    ]
  }

  getEvents() {
    this.eventsService.getComingEvents().subscribe((res: EventModel[]) => {
      this.events = res
    })
  }

}
