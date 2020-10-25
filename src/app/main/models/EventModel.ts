import { PerformDateTime } from './perform-datetime'
import { TicketSelling } from './ticket-selling'

export class EventModel {
  public id: number
  public name: string
  public location: string
  public onlineDetail: string
  public description: string
  public performTime: string
  public performDateTimeList: PerformDateTime[]
  public ticketStartTime: string
  public ticketEndTime: string
  public coverPath: string
  public eventArtistList: any[]
  public ticketSellingList: TicketSelling[]
}
