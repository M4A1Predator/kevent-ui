import { Component, OnInit, Input } from '@angular/core'
import { EventModel } from '../../models/EventModel'
import { EventsService } from '../../event/events.service'
import * as moment from 'moment'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.styl']
})
export class EventItemComponent implements OnInit {

  faShoppingCart = faShoppingCart

  @Input()
  event: EventModel
  performDateStrs: string[] = []

  coverUrl = null

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    // get cover
    // if (this.event.coverPath) {
    this.eventsService.getCover(this.event.id).subscribe((res: Blob) => {
      const f = new FileReader()
      f.addEventListener("load", () => {
        this.coverUrl = f.result
      }, false)
      f.readAsDataURL(res)
    }, err => {
      console.error(err)
    })
    // }

    // datetimes
    this.performDateStrs = this.event.performDateTimeList.map(p => {
      const performDateM = moment(this.event.performTime)
      return performDateM.format("D-MMM-YYYY")
    })
  }
}
