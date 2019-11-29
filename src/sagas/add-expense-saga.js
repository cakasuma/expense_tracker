import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { ADD_EXPENSE, EXPENSES_LOAD_FAILED } from "../utils/constants";

// axios network requests

// function that makes the api request and returns a Promise for response
function addExpense(new_transactions) {
  const transactions = new_transactions.new_transactions;
  return axios({
    method: "post",
    url: "https://expense-tracker-mustofa.getsandbox.com/transactions",
    data: { ...transactions }
  });
}

function* addData(new_transactions) {
  console.log("check saga 1");
  try {
    const response = yield call(addExpense, new_transactions);
    console.log(response.data);
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: EXPENSES_LOAD_FAILED, error });
  }
}

function* addExpenseSaga() {
  yield takeLatest(ADD_EXPENSE, addData);
}

export default addExpenseSaga;
