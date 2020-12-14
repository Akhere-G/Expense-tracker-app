import { useContext, useReducer, createContext } from "react";

import { reducer, initialState } from "./reducer";
import actionTypes from "./actionTypes";
const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export default useGlobalState;
