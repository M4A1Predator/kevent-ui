import { Component, OnInit } from '@angular/core'
import { EventsService } from '../events.service'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { EventModel } from '../../models/EventModel'
import { environment } from 'src/environments/environment'
import { BreadCumbItem } from 'src/app/shared/components/breadcumb/breadcumb-item'
import { UtilsService } from 'src/app/shared/utils/utils.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

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

  zoneImageData: ArrayBuffer

  constructor(private eventsService: EventsService,
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.pipe(flatMap(params => {
        return of(params["eventId"])
      })
    ).pipe(flatMap(eventId => {
      return this.eventsService.getEvent(eventId)
    })).subscribe(data => {
      this.event = data
      this.event.ticketSellingList = this.event.ticketSellingList.map(t => {
        const converted = { ...t }
        converted.ticketStartTime = new Date(t.ticketStartTime)
        if (t.ticketEndTime) {
          converted.ticketEndTime = new Date(t.ticketEndTime)
        }
        return converted
      })

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
        this.utilsService.createImageFromBlob(res).subscribe(img => {
          this.zoneImageData = img
        })
      }, err => {})
    })
  }

  isLink(text: string) {
    if (!text) {
      return false
    }
    return text.startsWith("http://") || text.startsWith("https://")
  }

  viewImage(content, type: string) {
    if (type === 'zone') {
      this.modalService.open(content, {windowClass: 'event-preview-img'})
        .result.then(res => {}).catch(err => {})
      document.getElementsByClassName('img-modal')[0]['src'] = this.zoneImageData
    } else if (type === 'cover') {
      this.modalService.open(content, {windowClass: 'event-preview-img'})
        .result.then(res => {}).catch(err => {})
      document.getElementsByClassName('img-modal')[0]['src'] = this.coverUrl
    }
  }

}
