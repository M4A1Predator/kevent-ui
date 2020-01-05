import { Component, OnInit } from '@angular/core'
import { EventsService } from '../events.service'
import { ActivatedRoute } from '@angular/router'
import { flatMap, mergeMap, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { EventModel } from '../../models/EventModel'
import { environment } from 'src/environments/environment'
import * as moment from 'moment'
import { BreadCumbItem } from 'src/app/shared/components/breadcumb/breadcumb-item'
import { UtilsService } from 'src/app/shared/utils/utils.service'

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

  zomeImageData: ArrayBuffer

  constructor(private eventsService: EventsService,
    private route: ActivatedRoute,
    private utilsService: UtilsService) { }

  ngOnInit() {
    this.route.params.pipe(flatMap(params => {
        return of(params["eventId"])
      })
    ).pipe(flatMap(eventId => {
      return this.eventsService.getEvent(eventId)
    })).subscribe(data => {
      this.event = data

      // get cover
      if (data.coverPath) {
        this.coverUrl = `${environment.API_URL}/events/${data.id}/cover`
      }

      // constuct breadcumb
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

      // get zone image
      this.eventsService.getZoneImage(this.event.id).subscribe(res => {
        console.log('img' + res);
        this.utilsService.createImageFromBlob(res).subscribe(img => {
          this.zomeImageData = img
          console.log(img);
        })
      }, err => {})
      console.log(this.event);
    })
  }

}
