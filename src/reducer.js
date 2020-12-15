import actionTypes from "./actionTypes";
import { v4 as idMaker } from "uuid";
import { sumBalance, sumIncome, sumExpenses, filterFunc } from "./Utils.js";

export const reducer = (state, action) => {
  const filterItem = item => {
    return filterFunc(state.searchOption, item);
  };

  switch (action.type) {
    case actionTypes.ADD:
      const addedTransactions = [
        ...state.transactions,
        {
          id: idMaker(),
          title: action.payload.title,
          amount: action.payload.amount,
          date: action.payload.date,
        },
      ];

      const filteredAdded = addedTransactions.filter(item =>
        filterItem(item.amount)
      );

      return {
        ...state,
        balance: sumBalance(filteredAdded),
        income: sumIncome(filteredAdded),
        expenses: sumExpenses(filteredAdded),
        transactions: addedTransactions,
        searchItems: filteredAdded,
      };
    case actionTypes.DELETE:
      const newTransactions = [
        ...state.transactions.filter(item => item.id !== action.payload.id),
      ];

      const filteredNewList = newTransactions.filter(item =>
        filterItem(item.amount)
      );

      return {
        ...state,
        balance: sumBalance(filteredNewList),
        income: sumIncome(filteredNewList),
        expenses: sumExpenses(filteredNewList),
        transactions: newTransactions,
        searchItems: filteredNewList,
      };
    case actionTypes.FILTER:
      const newSearchOption = action.payload;
      const filteredList = state.transactions.filter(item =>
        filterFunc(newSearchOption, item.amount)
      );

      return {
        ...state,
        balance: sumBalance(filteredList),
        income: sumIncome(filteredList),
        expenses: sumExpenses(filteredList),
        searchOption: newSearchOption,
        searchItems: filteredList,
      };
    default:
      return state;
  }
};
