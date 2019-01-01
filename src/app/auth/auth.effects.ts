import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { ActionTypes, LoginSuccess, Logout } from './auth.action'
import { catchError, map, mergeMap } from "rxjs/operators";
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<any> = this.actions$.pipe(
    ofType<LoginSuccess>(ActionTypes.LOGIN_SUCCESS),
    mergeMap(action => {
      const data = {
        isAuthenticated: true,
        data: action.payload
      }
      this.localStorage$.setItem("auth", data)
      return new Observable();
    })
  );

  @Effect()
  Logout: Observable<any> = this.actions$.pipe(
    ofType<Logout>(ActionTypes.LOGOUT),
    mergeMap(action => {
      this.localStorage$.setItem("auth", {})
      return new Observable()
    })
  )

  constructor(private http: HttpClient, 
    private actions$: Actions,
    private store: Store<any>,
    private localStorage$: LocalStorageService) {}
}
