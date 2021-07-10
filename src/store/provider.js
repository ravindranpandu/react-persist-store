import { createContext, useReducer, useEffect } from "react";
import { RootReducer } from 'src/reducers';
import { INITIAL_STATE } from "./initial-state";
import { getPersistState, setPersistState } from './persist';
import Logger from './logger';

export const store = createContext(INITIAL_STATE);

const { Provider } = store;

export const StateProvider  = ({ children }) => {
  const persistedState = getPersistState() || INITIAL_STATE;
  const [state, dispatch] = useReducer(Logger(RootReducer), persistedState);

  useEffect(() => setPersistState(state), [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}