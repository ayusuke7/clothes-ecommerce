import { all } from "redux-saga/effects";
import productSagas from "./products";
import categorySagas from "./categorys";
import userSagas from "./user";

export default function* rootSagas() {
  yield all([productSagas(), categorySagas(), userSagas()]);
}
