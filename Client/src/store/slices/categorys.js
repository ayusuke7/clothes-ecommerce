import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  message: null,
  loading: false,
};

const categorysSlice = createSlice({
  name: "categorys",
  initialState,
  reducers: {
    getDataCategorys: (state) => {
      state.loading = true;
    },
    setDataCategorys: (state, { payload }) => {
      state.data = [...payload];
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

const { actions, reducer } = categorysSlice;

export const categorysActions = actions;

export default reducer;
