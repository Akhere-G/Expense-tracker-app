import actionTypes from "./actionTypes";
import { v4 as idMaker } from "uuid";

const initialTransactions = [
  {
    id: 1,
    title: "bread",
    amount: -5,
  },
  {
    id: 2,
    title: "eggs",
    amount: -10,
  },
  {
    id: 3,
    title: "paycheck",
    amount: 5,
  },
  {
    id: 4,
    title: "birythday gift",
    amount: 20,
  },
];

const sumIncome = () => {
  return initialTransactions.reduce((sum, current) => {
    const num = current.amount;
    if (num > 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

const sumExpenses = () => {
  return initialTransactions.reduce((sum, current) => {
    const num = current.amount;
    if (num < 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

const sumBalance = () => {
  return initialTransactions.reduce((sum, current) => {
    return sum + current.amount;
  }, 0);
};
export const initialState = {
  balance: sumBalance(),
  income: sumIncome(),
  expenses: sumExpenses(),
  transactions: initialTransactions,
};

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
