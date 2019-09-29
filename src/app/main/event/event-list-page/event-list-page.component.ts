import { Component, OnInit } from '@angular/core'
import { EventModel } from '../../models/EventModel'
import { EventsService } from '../events.service'
import { BreadCumbItem } from 'src/app/shared/components/breadcumb/breadcumb-item'
import { ActivatedRoute } from '@angular/router'
import { flatMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { SearchParams } from '../../models/search-params'
import { EventListResponse } from '../../models/event-list-response';
import { Pageable } from 'src/app/shared/components/pagination/pageable';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.styl']
})
export class EventListPageComponent implements OnInit {

  events: EventModel[]
  breadcumb: BreadCumbItem[]
  keyword: string

  perPage = 7
  page = 1
  pageable: Pageable = new Pageable()

  constructor(private eventsService: EventsService,
    private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.breadcumb = [
      {
        label: 'Events',
        url: '/events'
      } as BreadCumbItem
    ]
    this.activedRouter.queryParams.pipe(flatMap(params => {
      this.keyword = params['q']
      return of(this.keyword)
    })).pipe(flatMap(() => {
      this.getEvents()
      return of()
    })).subscribe()
  }

  getEvents() {
    const searchParams: SearchParams = new SearchParams()
    searchParams.page = this.page
    searchParams.perPage = this.perPage
    if (this.keyword) {
      searchParams.q = this.keyword
    } else {
      searchParams.q = ""
    }

    this.eventsService.searchEvents(searchParams).subscribe((res: EventListResponse) => {
      this.events = res.data
      this.pageable.totalPage = res.totalPage
      this.pageable.page = searchParams.page
      this.pageable.perPage = this.perPage
    })
  }

  changePage(page: number) {
    this.page = page
    this.getEvents()
  }

}
