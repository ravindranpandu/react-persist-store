import { ACTION_TYPES } from 'src/constants';
import { INITIAL_STATE } from 'src/store';

export const UserReducer = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_LOGIN:      
      return {
        ...action.payload
      };
    case ACTION_TYPES.USER_LOGOUT:      
      return INITIAL_STATE.user;
    default:
      return state;
  }
};