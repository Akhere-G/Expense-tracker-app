import actionTypes from "./actionTypes";

export const initialState = {
  transactions: [
    { id: 1, title: "Apples", cost: -10 },
    { id: 2, title: "Haircut", cost: -50 },
    { id: 3, title: "paycheck", cost: 40 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
      };
    default:
      return state;
  }
};
