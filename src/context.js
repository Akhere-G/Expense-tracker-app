import { useState, useContext, useReducer, createContext } from "react";

import { reducer, initialState } from "./reducer";
import actionTypes from "./actionTypes";
const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTransaction = (title, amount) => {
    dispatch({
      type: actionTypes.ADD,
      payload: { title, amount: parseFloat(amount) },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export default useGlobalState;
