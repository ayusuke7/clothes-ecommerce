import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: null,
  loading: false,
};

const infoProductSlice = createSlice({
  name: "infoProduct",
  initialState,
  reducers: {
    getInfoProduct: (state) => {
      state.loading = true;
    },
    setInfoProduct: (state, { payload }) => {
      state.data = payload;
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

const { actions, reducer } = infoProductSlice;

export const infoProductActions = actions;

export default reducer;
