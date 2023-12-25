import { ACCOUNT_ACTIONS } from './actions';

export interface AccountState {
  userName?: string;
  walletId?: string;
  userType?: string;
  token?: string;
};

const INITIAL_STATE: AccountState = {
  userName: '',
  walletId: '',
  userType: '',
  token: ''
};

export const accountReducer = (state: AccountState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ACCOUNT_ACTIONS.UPDATE_CURRENT_ACCOUNT:
      return {
        ...state,
        userName: action.data.userName,
        walletId: action.data.walletId,
        userType: action.data.userType,
        token: action.data.token
      };
    default:
      return state;
  }
};
