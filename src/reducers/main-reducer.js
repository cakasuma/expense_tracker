const initialState = {
  transactions: [],
  balance: 0,
  name: ""
};

export default (state = initialState) => {
  return { ...state };
};
