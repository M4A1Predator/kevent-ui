import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../models/EventModel';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.styl']
})
export class EventListComponent implements OnInit {

  @Input()
  events: EventModel[]

  constructor() { }

  ngOnInit() {
  }

}
