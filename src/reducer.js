export const initialState = {
  transactions: [],
};

const actionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  FILTER: "FILTER",
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
