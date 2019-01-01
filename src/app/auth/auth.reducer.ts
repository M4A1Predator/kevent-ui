import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from './auth.action'

const initialState = {
  attempsCount: 0,
  isAuthenticated: false,
  data: {}
}

export function authReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.INCREASE: {
      return {
        ...state,
        attempsCount: state.attempsCount + 1
      }
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload
      }
    }

    case ActionTypes.LOGOUT: {
      return initialState
    }

    default: {
      return state;
    }
  }
}