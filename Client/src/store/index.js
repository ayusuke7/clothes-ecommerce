import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import sliceUser from "./slices/user";
import sliceProducts from "./slices/products";
import sliceCategorys from "./slices/categorys";
import sliceInfoProduct from "./slices/info-product";

import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: sliceUser,
    products: sliceProducts,
    infoProduct: sliceInfoProduct,
    categorys: sliceCategorys,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

const action = (type) => store.dispatch({ type });

export { store, action };
