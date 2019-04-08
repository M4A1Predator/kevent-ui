import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<any> {
    const option = {}
    return this.http.get(`${environment.API_URL}/events/public`, option)
  }

  public getCover(eventId: number) {
    const option = {
      responseType: 'blob' as 'json',
    }
    return this.http.get<Blob>(`${environment.API_URL}/events/${eventId}/cover`, option)
  }

}
