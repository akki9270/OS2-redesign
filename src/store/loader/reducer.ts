import { LOADER_ACTIONS } from './actions';

export interface LoaderState {
  isShowLoader?: boolean;
}

const INITIAL_STATE: LoaderState = {
  isShowLoader: false,
};

export const loaderReducer = (state: LoaderState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOADER_ACTIONS.SHOW_LOADER:
      return {
        ...state,
        isShowLoader: true
      };
    case LOADER_ACTIONS.HIDE_LOADER:
      return {
        ...state,
        isShowLoader: false
      };
    default:
      return state;
  }
};
