import { EventModel } from './EventModel'

export class EventListResponse {
  page: number
  totalPage: number
  data: EventModel[]
}
