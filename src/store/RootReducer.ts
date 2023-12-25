import { combineReducers } from 'redux';

/* Reducers */
import { accountReducer } from './account';
import { projectReducer } from './projects';
import { contractReducer } from './contracts';
import { authReducer } from './auth';

export const appReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  projects: projectReducer,
  contracts: contractReducer
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
