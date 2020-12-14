import { useEffect, useContext, useReducer, createContext } from "react";

import actionTypes from "./actionTypes";
const AppContext = createContext(null);

export const AppProvider = ({
  children,
  initialState,
  reducer,
  storageKey,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTransaction = (title, amount, date) => {
    dispatch({
      type: actionTypes.ADD,
      payload: { title, amount: parseFloat(amount), date },
    });
  };

  const deleteTransaction = id => {
    dispatch({
      type: actionTypes.DELETE,
      payload: { id },
    });
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        state,
        addTransaction,
        deleteTransaction,
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
