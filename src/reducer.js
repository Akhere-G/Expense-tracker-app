import actionTypes from "./actionTypes";
import { v4 as idMaker } from "uuid";
export const initialState = {
  transactions: [],
};

export const reducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
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
