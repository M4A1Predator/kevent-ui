import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  INCREASE = 'INCREASE',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',

  LOGOUT = '[Auth] Logout'
}
 
export class Increment implements Action {
  readonly type = ActionTypes.INCREASE;
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT
}

export type ActionsUnion = Increment | LoginSuccess | Logout
