import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  EXPENSES_LOADED,
  EXPENSES_LOAD_FAILED,
  FETCH_EXPENSES
} from "../utils/constants";

// axios network requests

// function that makes the api request and returns a Promise for response
function fetchExpenses() {
  return axios({
    method: "get",
    url: "https://expense-tracker-mustofa.getsandbox.com/transactions"
  });
}

function* fetchData() {
  try {
    const response = yield call(fetchExpenses);
    // eslint-disable-next-line no-underscore-dangle
    const { data } = response;
    // dispatch a success action to the store with the new data
    yield put({ type: EXPENSES_LOADED, transactions: data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: EXPENSES_LOAD_FAILED, error });
  }
}

function* fetchExpensesSaga() {
  yield takeLatest(FETCH_EXPENSES, fetchData);
}

export default fetchExpensesSaga;
