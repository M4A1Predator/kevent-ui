import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { SearchParams } from '../models/search-params'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  public getComingEvents(): Observable<any> {
    const option = {}
    const params: HttpParams = new HttpParams({})
      .set("page", "1")
      .set("pageSize", "5")
    return this.http.get(`${environment.API_URL}/events/public?${params.toString()}`, option)
  }

  public getCover(eventId: number) {
    const option = {
      responseType: 'blob' as 'json',
    }
    return this.http.get<Blob>(`${environment.API_URL}/events/${eventId}/cover`, option)
  }

  public getEvent(eventId: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/events/public/${eventId}`)
  }

  public searchEvents(searchParams: SearchParams) {
    const option = {}
    const query: HttpParams = new HttpParams({})
      .set("page", searchParams.page + "")
      .set("perPage", searchParams.perPage + "")
      .set("q", searchParams.q)
    return this.http.get(`${environment.API_URL}/events/public?${query.toString()}`, option)
  }

  public getZoneImage(eventId: number): Observable<Blob> {
    return this.http.get<Blob>(`${environment.API_URL}/events/${eventId}/images/zone`)
  }

}
