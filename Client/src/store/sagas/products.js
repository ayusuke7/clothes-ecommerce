import { put, call, takeEvery } from "redux-saga/effects";
import { getProductData, setMessage, setProductData } from "../slices/products";
import ProductServices from "../../services/products";

const service = new ProductServices();

function* listAllProducts() {
  try {
    const { data } = yield call(service.getAllProducts);
    yield put(setProductData(data));
  } catch (error) {
    yield put(setMessage(error));
  }
}

export default function* watcher() {
  yield takeEvery(getProductData, listAllProducts);
  // yield takeEvery(getProductData, listProducts);
}
