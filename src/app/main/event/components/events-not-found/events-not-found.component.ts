import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-events-not-found',
  templateUrl: './events-not-found.component.html',
  styleUrls: ['./events-not-found.component.styl']
})
export class EventsNotFoundComponent implements OnInit {

  @Input()
  keyword: string

  constructor() { }

  ngOnInit() {
  }

}
