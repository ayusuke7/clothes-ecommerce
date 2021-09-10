import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sliceProducts from "./slices/products";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: sliceProducts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

const action = (type) => store.dispatch({ type });

export { store, action };
