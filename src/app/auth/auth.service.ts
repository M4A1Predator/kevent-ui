import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store, select } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { LoginForm } from './login-form/LoginForm';
import { map, catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store:Store<any>, private http: HttpClient) {
  }

  public isAuthenticated() {
    let auth = { isAuthenticated: false };
    return this.store.select('auth')
  }

  login(credential: LoginForm) {
    const formData: URLSearchParams = new URLSearchParams();
    formData.append('username', credential.username)
    formData.append('password', credential.password)
    formData.append('grant_type', 'password')
    formData.append('client_id', 'kevent_client')

    return this.http.post(`${environment.API_URL}/oauth/token`, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('kevent_client:secret')}`
      }
    }).pipe(map(res => {
      return res;
    }))
  }
}
