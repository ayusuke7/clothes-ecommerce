import { put, call, takeEvery } from "redux-saga/effects";
import { categorysActions } from "../slices/categorys";
import CategoryServices from "../../services/categorys";
//import { PRODUCT_FIELDS as pf } from "../../commons/fields";

const service = new CategoryServices();

function* listAllCategorys() {
  try {
    const { data } = yield call(service.getAllCategorys);
    yield put(categorysActions.setDataCategorys(data.result));
  } catch (error) {
    yield put(categorysActions.setMessage(error?.message));
  }
}

export default function* watcher() {
  yield takeEvery(categorysActions.getDataCategorys, listAllCategorys);
}
