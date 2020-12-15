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

  const changeSearchOption = searchOption => {
    switch (searchOption) {
      case "all":
      case "income":
      case "expenses":
        console.log("returning a dispatch called", searchOption);
        return dispatch({ type: actionTypes.FILTER, payload: searchOption });
      default:
        console.error("Inccorrect search option");
    }
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return (
    <AppContext.Provider
      value={{
        state,
        addTransaction,
        changeSearchOption,
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
