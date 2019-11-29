// Imports: Dependencies
import { all, fork } from "redux-saga/effects";

// Imports: Redux Sagas
import FetchExpenseSaga from "./fetch-expense-saga";
import AddExpenseSaga from "./add-expense-saga";

// Redux Saga: Root Saga
function* rootSaga() {
  yield all([fork(FetchExpenseSaga), fork(AddExpenseSaga)]);
}

export default rootSaga;
