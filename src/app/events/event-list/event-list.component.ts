import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.styl']
})
export class EventListComponent implements OnInit {

  @Input()
  events: any[] = []

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickEvent(eventId) {
    this.router.navigate(['/events', eventId])
  }
}
