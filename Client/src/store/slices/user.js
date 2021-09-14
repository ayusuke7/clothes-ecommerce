import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  message: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoginRequest: (state) => {
      state.loading = true;
    },
    setLoginResponse: (state, { payload }) => {
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

const { actions, reducer } = usersSlice;

export const userActions = actions;

export default reducer;
