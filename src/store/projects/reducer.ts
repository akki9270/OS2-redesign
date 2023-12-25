import { Action, PROJECT_ACTIONS } from './actions';
import { Project } from '../../models';

const INITIAL_STATE: Project[] = [];

export const projectReducer = (state: Project[] = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case PROJECT_ACTIONS.UPDATE_PROJECTS:
      const projects = action.data;
      return {
        projects
      };
    default:
      return state;
  }
};
