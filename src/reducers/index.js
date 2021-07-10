import { UserReducer } from './user.reducer';

export const RootReducer = (state, action) => ({
  user: UserReducer(state.user, action)
});