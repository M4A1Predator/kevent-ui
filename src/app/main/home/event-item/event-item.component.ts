import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../models/EventModel';
import { EventsService } from '../../event/events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.styl']
})
export class EventItemComponent implements OnInit {

  @Input()
  event: EventModel

  coverUrl = null

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    if (this.event.coverPath) {
      this.eventsService.getCover(this.event.id).subscribe((res: Blob) => {
        const f = new FileReader()
        f.addEventListener("load", () => {
          this.coverUrl = f.result
        }, false)
        f.readAsDataURL(res)
      }, err => {
        console.error(err);
      })
    }
  }
}
