import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  auth$: Observable<any>;
  eventList: any[];

  constructor(private store: Store<{ auth: any }>,
    private eventsService: EventsService) {
    
    this.auth$ = store.pipe(select('auth'))
  }

  ngOnInit() {
    // Get event list
    this.eventsService.getEvents().subscribe((data: any[]) => {
      console.log(data);
      this.eventList = data
    })
  }
};