import { Action } from '@ngrx/store'

export enum ActionTypes {
  LoadData = '[LocalStorage] Load data',
  LoadDataSuccess = '[LocalStorage] Load data success'
}

export class LoadData implements Action {
  type = ActionTypes.LoadData
}

export class LoadDataSuccess implements Action {
  type = ActionTypes.LoadDataSuccess
}

export type ActionsUnion = LoadData | LoadDataSuccess