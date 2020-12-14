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
            date: action.payload.date,
          },
        ],
      };
    case actionTypes.DELETE:
      const transactionToDelete = state.transactions.find(
        item => item.id === action.payload.id
      );

      const amountDeducted = transactionToDelete.amount;
      let incomeDeducted = 0;
      let expensesDeducted = 0;
      if (amountDeducted > 0) {
        incomeDeducted = amountDeducted;
      } else {
        expensesDeducted = amountDeducted;
      }
      return {
        ...state,
        balance: state.balance - amountDeducted,
        income: state.income - incomeDeducted,
        expenses: state.expenses - expensesDeducted,
        transactions: [
          ...state.transactions.filter(item => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
