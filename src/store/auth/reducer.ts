import { AUTH_ACTIONS } from './actions';

export interface AuthState {
  isAuthenticated?: boolean;
}

const INITIAL_STATE: AuthState = {
  isAuthenticated: false
};

export const authReducer = (state: AuthState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_USER: 
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH_ACTIONS.LOGOUT_USER: 
      return {
        ...state,
        isAuthenticated: INITIAL_STATE.isAuthenticated
      };
    default:
      return state;
  }
};
