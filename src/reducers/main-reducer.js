import {
  ADD_EXPENSE,
  FETCH_EXPENSES,
  EXPENSES_LOADED,
  EXPENSES_LOAD_FAILED
} from "../utils/constants";

const initialState = {
  transactions: [],
  balance: 0,
  name: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        transactions: action.new_transactions
      };
    case FETCH_EXPENSES:
      return {
        ...state
      };
    case EXPENSES_LOADED:
      return {
        ...state,
        transactions: action.transactions
      };
    case EXPENSES_LOAD_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
