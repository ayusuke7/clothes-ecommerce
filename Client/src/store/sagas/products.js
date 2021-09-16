import { put, call, takeEvery } from "redux-saga/effects";
import { productActions } from "../slices/products";
import { infoProductActions } from "../slices/info-product";
//import { PRODUCT_FIELDS as pf } from "../../commons/fields";
import ProductServices from "../../services/products";

const service = new ProductServices();

function* listAllProducts() {
  try {
    const { data } = yield call(service.getAllProducts);
    yield put(productActions.setProductData(data.result));
  } catch (error) {
    yield put(productActions.setMessage(error?.message));
  }
}

function* findInfoProduct({ payload }) {
  try {
    const { data } = yield call(service.getInfoProduct, payload);
    yield put(infoProductActions.setInfoProduct(data.result));
  } catch (error) {
    yield put(infoProductActions.setMessage(error?.message));
  }
}

export default function* watcher() {
  yield takeEvery(productActions.getProductData, listAllProducts);
  yield takeEvery(infoProductActions.getInfoProduct, findInfoProduct);
  // yield takeEvery(getProductData, listProducts);
}
