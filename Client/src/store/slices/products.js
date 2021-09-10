import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  message: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state) => {
      state.loading = true;
    },
    setProductData: (state, { payload }) => {
      state.data = [...state.data, ...payload];
      state.loading = false;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = productsSlice;

export const { getProductData, setProductData, setLoading, setMessage } =
  actions;

export default reducer;
