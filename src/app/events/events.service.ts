import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  public getEvents() {

    // const options = {
    //   headers: {
    //     Authorization: 
    //     'Content-Type': 
    //   }
    // }

    return this.http.get(`${environment.API_URL}/events`)
  }

  public getEventById(eventId): Observable<any> {
    return this.http.get(`${environment.API_URL}/events/${eventId}`)
  }
}
