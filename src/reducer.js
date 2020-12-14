import actionTypes from "./actionTypes";
import { v4 as idMaker } from "uuid";
import { sumBalance, sumIncome, sumExpenses } from "./Utils.js";
export const reducer = (state, action) => {
  console.log("state", state, "action", action);
  const filterItem = item => {
    switch (state.searchOption) {
      case "all":
        return true;
      case "income":
        return item > 0;
      case "expenses":
        return item < 0;
      default:
        return true;
    }
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
    default:
      return state;
  }
};
