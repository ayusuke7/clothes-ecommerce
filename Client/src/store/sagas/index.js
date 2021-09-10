import { all } from "redux-saga/effects";
import productSagas from "./products";

export default function* rootSagas() {
  yield all([productSagas()]);
}
