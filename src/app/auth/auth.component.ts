import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators'
import { Store, select } from '@ngrx/store'
import { Increment, LoginSuccess } from './auth.action'
import { AuthService } from './auth.service';
import { LoginForm } from './login-form/LoginForm';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.styl']
})
export class AuthComponent implements OnInit {

  attemps: Observable<number>;

  constructor(private store: Store<any>, 
    private authService: AuthService, 
    private router: Router,
    private localStorageService: LocalStorageService) {
    this.attemps = this.store.pipe(select('auth'))
  }

  ngOnInit() {
  }

  onLogin(credential: LoginForm) {
    this.store.dispatch(new Increment());

    this.authService.login(credential)
    .pipe(first())
    .subscribe(res => {
      const payload = res;
      this.store.dispatch(new LoginSuccess(res))
      // this.localStorageService.setItem('auth', res)
      this.router.navigate(["/"])
    })
  }

}
