import { PerformDateTime } from './perform-datetime'

export class EventModel {
  public id: number
  public name: string
  public location: string
  public description: string
  public performTime: string
  public performDateTimeList: PerformDateTime[]
  public ticketStartTime: string
  public ticketEndTime: string
  public coverPath: string
  public eventArtistList: any[]
}
