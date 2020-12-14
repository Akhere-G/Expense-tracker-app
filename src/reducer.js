import actionTypes from "./actionTypes";
import { v4 as idMaker } from "uuid";

export const reducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case actionTypes.ADD:
      const amount = action.payload.amount;
      let incomeAdded = 0;
      let expensesAdded = 0;
      if (amount > 0) {
        incomeAdded = amount;
      } else {
        expensesAdded = amount;
      }
      return {
        ...state,
        balance: state.balance + amount,
        income: state.income + incomeAdded,
        expenses: state.expenses + expensesAdded,
        transactions: [
          ...state.transactions,
          {
            id: idMaker(),
            title: action.payload.title,
            amount: action.payload.amount,
          },
        ],
      };
    default:
      return state;
  }
};
