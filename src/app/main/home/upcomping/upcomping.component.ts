import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../models/EventModel';

@Component({
  selector: 'app-upcomping',
  templateUrl: './upcomping.component.html',
  styleUrls: ['./upcomping.component.styl']
})
export class UpcompingComponent implements OnInit {
  @Input()
  events: EventModel[] = []

  constructor() { }

  ngOnInit() {}

}
