import { Component, OnInit } from '@angular/core'
import { EventsService } from '../events.service'
import { ActivatedRoute } from '@angular/router'
import { flatMap, mergeMap, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { EventModel } from '../../models/EventModel'
import { environment } from 'src/environments/environment'
import * as moment from 'moment'
import { BreadCumbItem } from 'src/app/shared/components/breadcumb/breadcumb-item'

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.styl']
})
export class EventPageComponent implements OnInit {

  private event: EventModel = null
  private coverUrl: string = null
  performDateStrs: string[] = []
  breadcumb: BreadCumbItem[] = []

  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(flatMap(params => {
        return of(params["eventId"])
      })
    ).pipe(flatMap(eventId => {
      return this.eventsService.getEvent(eventId)
    })).subscribe(data => {
      this.event = data
      if (data.coverPath) {
        this.coverUrl = `${environment.API_URL}/events/${data.id}/cover`
      }

      this.performDateStrs = this.event.performDateTimeList.map(p => {
        const performDateM = moment(this.event.performTime)
        return performDateM.format("D-MMM-YYYY")
      })

      this.breadcumb = [
        {
          label: 'Events',
          url: '/events'
        } as BreadCumbItem,
        {
          label: `${this.event.name}`,
          url: `/events/${this.event.id}`
        } as BreadCumbItem,
      ]
    })
  }

}
