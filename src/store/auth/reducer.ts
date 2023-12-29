import { AUTH_ACTIONS } from './actions';

export interface AuthState {  
  auth?: any;
}

const INITIAL_STATE: AuthState = {  
  auth: null,
};

export const authReducer = (state: AuthState = INITIAL_STATE, action: any) => {  
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_USER: 
      return {
        ...state,        
        auth: action.data
      };    
    case AUTH_ACTIONS.LOGOUT_USER: 
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
