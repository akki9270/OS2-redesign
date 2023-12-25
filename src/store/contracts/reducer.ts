import { Action, CONTRACT_ACTIONS } from './actions';
import { Contract } from '../../models';

const INITIAL_STATE: Contract[] = [];

export const contractReducer = (state: Contract[] = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CONTRACT_ACTIONS.UPDATE_CONTRACTS:
      const contracts = action.data;
      return {
        contracts
      };
    default:
      return state;
  }
};
